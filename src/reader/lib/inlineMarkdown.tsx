import { Fragment, type ReactNode } from 'react'
import { SECTION_DELIMITER } from './readingFlow'

const fencedCodePattern = /```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g

export const stripInlineMarkdown = (text: string) =>
  text
    .replace(fencedCodePattern, (_, _language: string | undefined, code: string) => code)
    .replace(/```[a-zA-Z0-9_-]*\n?/g, '')
    .replace(/\*\*/g, '')

export const isDelimiterBlock = (text: string) =>
  stripInlineMarkdown(text).trim() === SECTION_DELIMITER

export const renderInlineMarkdown = (text: string): ReactNode[] =>
  text
    .split(/(\*\*.*?\*\*)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={`${index}-${part.slice(0, 12)}`} className="inline-strong">
            {part.slice(2, -2)}
          </strong>
        )
      }

      return <Fragment key={`${index}-${part.slice(0, 12)}`}>{part}</Fragment>
    })

export const renderReaderMarkdown = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  Array.from(text.matchAll(fencedCodePattern)).forEach((match, index) => {
    const [raw, language, code] = match
    const matchIndex = match.index ?? 0
    const before = text.slice(lastIndex, matchIndex)

    if (before) {
      nodes.push(
        <Fragment key={`text-${index}-${matchIndex}`}>
          {renderInlineMarkdown(before)}
        </Fragment>,
      )
    }

    nodes.push(
      <pre className="reader-code-block" key={`code-${index}-${matchIndex}`}>
        <code data-language={language || undefined}>{code.replace(/\n$/, '')}</code>
      </pre>,
    )

    lastIndex = matchIndex + raw.length
  })

  const after = text.slice(lastIndex)
  if (after || nodes.length === 0) {
    nodes.push(
      <Fragment key={`text-after-${lastIndex}`}>
        {renderInlineMarkdown(after)}
      </Fragment>,
    )
  }

  return nodes
}
