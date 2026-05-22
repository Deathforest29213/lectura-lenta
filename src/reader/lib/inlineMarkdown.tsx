import { Fragment, type ReactNode } from 'react'
import { SECTION_DELIMITER } from './readingFlow'

export const stripInlineMarkdown = (text: string) => text.replace(/\*\*/g, '')

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
