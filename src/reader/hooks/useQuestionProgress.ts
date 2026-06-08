import { useEffect, useMemo, useState } from 'react'
import type {
  BlockReviewRecord,
  BlockReviewStatus,
  QuestionAttempt,
  RelevantQuestion,
} from '../types/questions'

const STORAGE_KEY = 'lectura-lenta:question-progress'
const RECOVERY_THRESHOLD = 4

type QuestionProgressState = {
  attempts: QuestionAttempt[]
  blockRecords: BlockReviewRecord[]
}

const emptyState: QuestionProgressState = {
  attempts: [],
  blockRecords: [],
}

const readProgress = (): QuestionProgressState => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyState
    const parsed = JSON.parse(raw) as Partial<QuestionProgressState>
    return {
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
      blockRecords: Array.isArray(parsed.blockRecords) ? parsed.blockRecords : [],
    }
  } catch {
    return emptyState
  }
}

const nextRecordForAnswer = (
  blockRef: string,
  current: BlockReviewRecord | undefined,
  correct: boolean,
  answeredAt: string,
): BlockReviewRecord => {
  if (!correct) {
    return {
      blockRef,
      status: 'debil',
      recoveryStreak: 0,
      updatedAt: answeredAt,
    }
  }

  const recoveryStreak =
    current?.status === 'debil' || current?.status === 'repasar'
      ? current.recoveryStreak + 1
      : RECOVERY_THRESHOLD

  return {
    blockRef,
    status: recoveryStreak >= RECOVERY_THRESHOLD ? 'normal' : 'repasar',
    recoveryStreak,
    updatedAt: answeredAt,
  }
}

export function useQuestionProgress() {
  const [state, setState] = useState<QuestionProgressState>(readProgress)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const statusByBlockRef = useMemo(
    () => new Map(state.blockRecords.map((record) => [record.blockRef, record.status])),
    [state.blockRecords],
  )

  const getBlockStatus = (blockRef: string | null | undefined): BlockReviewStatus => {
    if (!blockRef) return 'normal'
    return statusByBlockRef.get(blockRef) ?? 'normal'
  }

  const recordQuestionAttempt = (question: RelevantQuestion, correct: boolean) => {
    const answeredAt = new Date().toISOString()
    setState((current) => {
      const recordsByBlock = new Map(
        current.blockRecords.map((record) => [record.blockRef, record] as const),
      )

      question.blockRefs.forEach((blockRef) => {
        recordsByBlock.set(
          blockRef,
          nextRecordForAnswer(blockRef, recordsByBlock.get(blockRef), correct, answeredAt),
        )
      })

      return {
        attempts: [
          ...current.attempts,
          {
            questionId: question.id,
            blockRefs: question.blockRefs,
            correct,
            answeredAt,
          },
        ],
        blockRecords: Array.from(recordsByBlock.values()),
      }
    })
  }

  return {
    attempts: state.attempts,
    blockRecords: state.blockRecords,
    getBlockStatus,
    recordQuestionAttempt,
  }
}
