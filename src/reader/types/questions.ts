export type QuestionDifficulty = 'basica' | 'media' | 'avanzada'

export type QuestionChoice = {
  label: string
  text: string
}

export type RelevantQuestion = {
  id: string
  unitTitle: string
  difficulty: QuestionDifficulty
  blockRefs: string[]
  prompt: string
  choices: QuestionChoice[]
}

export type RelevantQuestionUnit = {
  title: string
  questions: RelevantQuestion[]
}

export type RelevantQuestionMap = {
  moduleId: string | null
  units: RelevantQuestionUnit[]
}

export type BlockReviewStatus = 'normal' | 'repasar' | 'debil'

export type QuestionAttempt = {
  questionId: string
  blockRefs: string[]
  correct: boolean
  answeredAt: string
}

export type BlockReviewRecord = {
  blockRef: string
  status: BlockReviewStatus
  recoveryStreak: number
  updatedAt: string
}
