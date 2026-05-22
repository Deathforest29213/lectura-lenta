export const SECTION_DELIMITER = '<----------------------------------------------->'

export const sentenceDelay = (char: string) => {
  if (char === '.' || char === ':' || char === ';') return 114
  if (char === ',') return 72
  if (char === ' ') return 27
  return 35
}
