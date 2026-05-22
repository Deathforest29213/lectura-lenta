import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { flattenSections, flattenTheme } from '../lib/markdownParser'
import { sentenceDelay } from '../lib/readingFlow'
import type { ParsedReadingModule } from '../types/modules'
import type { ReaderBlock, Theme, Unit } from '../types/reading'
import type { ProgressRecord } from '../types/progress'

type SaveProgress = (record: Omit<ProgressRecord, 'updatedAt'>) => void

type ReadingSessionOptions = {
  onProgress: SaveProgress
}

export function useReadingSession({ onProgress }: ReadingSessionOptions) {
  const [readerTitle, setReaderTitle] = useState('')
  const [flow, setFlow] = useState<ReaderBlock[]>([])
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0)
  const [revealedSentences, setRevealedSentences] = useState<string[]>([])
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [typingSentence, setTypingSentence] = useState('')
  const [typingIndex, setTypingIndex] = useState(0)
  const [typing, setTyping] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [compactText, setCompactText] = useState(false)

  const timeoutRef = useRef<number | null>(null)
  const pendingSentenceRef = useRef('')
  const currentBlock = flow[currentBlockIndex] ?? null

  const availableSections = useMemo(
    () => Array.from(new Set(flow.map((block) => block.sectionTitle))),
    [flow],
  )

  const sectionContextSentences = useMemo(() => {
    if (!currentBlock) return []

    let sectionStartIndex = currentBlockIndex
    while (
      sectionStartIndex > 0 &&
      flow[sectionStartIndex - 1]?.sectionTitle === currentBlock.sectionTitle
    ) {
      sectionStartIndex -= 1
    }

    return flow.slice(sectionStartIndex, currentBlockIndex).flatMap((block) => block.sentences)
  }, [currentBlock, currentBlockIndex, flow])

  const visibleSentences = useMemo(
    () => [...sectionContextSentences, ...revealedSentences],
    [revealedSentences, sectionContextSentences],
  )

  const persist = useCallback(
    (block: ReaderBlock | null) => {
      if (!block) return
      onProgress({
        moduleId: block.moduleId,
        unitId: block.unitId,
        themeId: block.themeId ?? `unit-${block.unitId}`,
        blockId: block.id,
        completedBlockIds: [block.id],
      })
    },
    [onProgress],
  )

  const clearTypingTimeout = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const resetTyping = useCallback(() => {
    clearTypingTimeout()
    pendingSentenceRef.current = ''
    setTyping(false)
    setTypingSentence('')
    setTypingIndex(0)
  }, [clearTypingTimeout])

  const resetReader = useCallback(() => {
    resetTyping()
    setFlow([])
    setCurrentBlockIndex(0)
    setRevealedSentences([])
    setCurrentSentenceIndex(0)
    setCompleted(false)
    setReaderTitle('')
  }, [resetTyping])

  const startReader = useCallback(
    (nextFlow: ReaderBlock[], nextTitle: string, initialBlockId?: string) => {
      resetTyping()
      const initialIndex = initialBlockId
        ? Math.max(
            0,
            nextFlow.findIndex((block) => block.id === initialBlockId),
          )
        : 0
      setReaderTitle(nextTitle)
      setFlow(nextFlow)
      setCurrentBlockIndex(initialIndex)
      setRevealedSentences([])
      setCurrentSentenceIndex(0)
      setCompleted(false)
    },
    [resetTyping],
  )

  const startTheme = useCallback(
    (module: ParsedReadingModule, unit: Unit, theme: Theme, initialBlockId?: string) => {
      startReader(
        flattenTheme(module.id, unit.id, theme),
        `${module.title} / ${unit.title} / ${theme.shortTitle}`,
        initialBlockId,
      )
    },
    [startReader],
  )

  const startUnit = useCallback(
    (module: ParsedReadingModule, unit: Unit) => {
      const flow = unit.themes.flatMap((theme) =>
        flattenSections(module.id, unit.id, theme.id, theme.sections),
      )
      startReader(flow, `${module.title} / ${unit.title}`)
    },
    [startReader],
  )

  const retreatBlock = useCallback(() => {
    if (!flow.length) return

    if (completed && flow.length) {
      const lastBlock = flow[flow.length - 1]
      resetTyping()
      setCompleted(false)
      setCurrentBlockIndex(flow.length - 1)
      setRevealedSentences(lastBlock.sentences)
      setCurrentSentenceIndex(lastBlock.sentences.length)
      return
    }

    const previousBlockIndex = Math.max(0, currentBlockIndex - 1)
    const previousBlock = flow[previousBlockIndex]
    if (!previousBlock) return

    resetTyping()
    setCompleted(false)
    setCurrentBlockIndex(previousBlockIndex)
    setRevealedSentences(previousBlock.sentences)
    setCurrentSentenceIndex(previousBlock.sentences.length)
  }, [completed, currentBlockIndex, flow, resetTyping])

  const advance = useCallback(() => {
    if (!currentBlock || completed) return
    if (typing) {
      clearTypingTimeout()
      const fullSentence = pendingSentenceRef.current
      setTyping(false)
      setTypingSentence('')
      setRevealedSentences((current) => [...current, fullSentence])
      setCurrentSentenceIndex((current) => current + 1)
      persist(currentBlock)
      return
    }
    if (currentSentenceIndex < currentBlock.sentences.length) {
      pendingSentenceRef.current = currentBlock.sentences[currentSentenceIndex]
      setTypingSentence('')
      setTypingIndex(0)
      setTyping(true)
      return
    }
    if (currentBlockIndex < flow.length - 1) {
      persist(currentBlock)
      resetTyping()
      setCurrentBlockIndex((current) => current + 1)
      setCurrentSentenceIndex(0)
      setRevealedSentences([])
      return
    }
    persist(currentBlock)
    setCompleted(true)
  }, [
    clearTypingTimeout,
    completed,
    currentBlock,
    currentBlockIndex,
    currentSentenceIndex,
    flow,
    persist,
    resetTyping,
    typing,
  ])

  const jumpToSection = useCallback(
    (sectionName: string) => {
      const sectionIndex = flow.findIndex((block) => block.sectionTitle === sectionName)
      if (sectionIndex === -1) return
      resetTyping()
      setCurrentBlockIndex(sectionIndex)
      setRevealedSentences([])
      setCurrentSentenceIndex(0)
      setCompleted(false)
    },
    [flow, resetTyping],
  )

  const toggleTextSize = useCallback(() => {
    setCompactText((current) => !current)
  }, [])

  useEffect(() => () => clearTypingTimeout(), [clearTypingTimeout])

  useEffect(() => {
    if (!typing) return
    const fullSentence = pendingSentenceRef.current
    if (typingIndex >= fullSentence.length) {
      setTyping(false)
      setTypingSentence('')
      setRevealedSentences((current) => [...current, fullSentence])
      setCurrentSentenceIndex((current) => current + 1)
      persist(currentBlock)
      return
    }
    const nextChar = fullSentence[typingIndex]
    timeoutRef.current = window.setTimeout(() => {
      setTypingSentence((current) => current + nextChar)
      setTypingIndex((current) => current + 1)
    }, sentenceDelay(nextChar))
    return () => clearTypingTimeout()
  }, [clearTypingTimeout, currentBlock, persist, typing, typingIndex])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!flow.length) return
      if (event.code === 'Enter' || event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault()
        advance()
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault()
        retreatBlock()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [advance, flow.length, retreatBlock])

  useEffect(() => {
    if (!currentBlock || typing || completed) return
    if (currentSentenceIndex === 0 && revealedSentences.length === 0) {
      advance()
    }
  }, [
    advance,
    completed,
    currentBlock,
    currentBlockIndex,
    currentSentenceIndex,
    revealedSentences.length,
    typing,
  ])

  return {
    readerTitle,
    currentBlock,
    currentBlockIndex,
    totalBlocks: flow.length,
    revealedSentences: visibleSentences,
    typingSentence,
    completed,
    compactText,
    availableSections,
    startTheme,
    startUnit,
    resetReader,
    advance,
    retreatBlock,
    jumpToSection,
    toggleTextSize,
  }
}
