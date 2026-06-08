import { parseFrontmatter } from './markdownParser'
import type {
  QuestionChoice,
  QuestionDifficulty,
  RelevantQuestion,
  RelevantQuestionMap,
} from '../types/questions'

const isDifficulty = (value: string): value is QuestionDifficulty =>
  value === 'basica' || value === 'media' || value === 'avanzada'

const choiceMatch = (line: string) => line.match(/^([A-D]):\s+(.*)$/)

const emptyQuestion = (id: string, unitTitle: string): RelevantQuestion => ({
  id,
  unitTitle,
  difficulty: 'media',
  blockRefs: [],
  prompt: '',
  choices: [],
})

const commitQuestion = (
  map: Map<string, RelevantQuestion[]>,
  unitTitle: string | null,
  question: RelevantQuestion | null,
) => {
  if (!unitTitle || !question || !question.prompt || question.choices.length === 0) return
  const questions = map.get(unitTitle) ?? []
  questions.push(question)
  map.set(unitTitle, questions)
}

export const parseRelevantQuestionMap = (markdown?: string): RelevantQuestionMap => {
  if (!markdown?.trim()) return { moduleId: null, units: [] }

  const { metadata, body } = parseFrontmatter(markdown)
  const grouped = new Map<string, RelevantQuestion[]>()
  let currentUnit: string | null = null
  let currentQuestion: RelevantQuestion | null = null
  let mode: 'blocks' | null = null

  body
    .replace(/\r/g, '')
    .split('\n')
    .forEach((line) => {
      const trimmed = line.trim()
      if (!trimmed) return

      if (/^## unit:/i.test(trimmed)) {
        commitQuestion(grouped, currentUnit, currentQuestion)
        currentUnit = trimmed.replace(/^## unit:/i, '').trim()
        currentQuestion = null
        mode = null
        return
      }

      if (/^### question:/i.test(trimmed)) {
        commitQuestion(grouped, currentUnit, currentQuestion)
        const id = trimmed.replace(/^### question:/i, '').trim()
        currentQuestion = emptyQuestion(id, currentUnit ?? 'Sin unidad')
        mode = null
        return
      }

      if (!currentQuestion) return

      if (/^blocks:/i.test(trimmed)) {
        mode = 'blocks'
        return
      }

      if (mode === 'blocks' && trimmed.startsWith('- ')) {
        currentQuestion.blockRefs.push(trimmed.slice(2).trim())
        return
      }

      mode = null

      const difficulty = trimmed.match(/^difficulty:\s+(.*)$/i)
      if (difficulty) {
        const value = difficulty[1].trim()
        currentQuestion.difficulty = isDifficulty(value) ? value : 'media'
        return
      }

      const prompt = trimmed.match(/^prompt:\s+(.*)$/i)
      if (prompt) {
        currentQuestion.prompt = prompt[1].trim()
        return
      }

      const choice = choiceMatch(trimmed)
      if (choice) {
        const [, label, text] = choice
        currentQuestion.choices.push({ label, text } satisfies QuestionChoice)
      }
    })

  commitQuestion(grouped, currentUnit, currentQuestion)

  return {
    moduleId: typeof metadata.module_id === 'string' ? metadata.module_id : null,
    units: Array.from(grouped.entries()).map(([title, questions]) => ({ title, questions })),
  }
}
