import { useState } from 'react'
import type { ParsedReadingModule } from '../types/modules'
import type { RelevantQuestionUnit } from '../types/questions'
import { TitleBar } from './TitleBar'
import { TopButton } from './TopButton'

type RelevantQuestionsScreenProps = {
  module: ParsedReadingModule
  onBack: () => void
}

function QuestionUnitDropdown({ unit }: { unit: RelevantQuestionUnit }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <section className="question-unit">
      <button
        className="question-unit-trigger panel-outline"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span>{unit.title}</span>
        <span className="status-pill">{unit.questions.length} preguntas</span>
      </button>

      {isOpen && (
        <div className="question-list">
          {unit.questions.map((question, index) => (
            <article className="question-card" key={question.id}>
              <div className="question-card-header">
                <span className="progress-pill">Pregunta {index + 1}</span>
                <span className="status-pill">{question.difficulty}</span>
              </div>
              <p className="question-prompt">{question.prompt}</p>
              <ol className="question-choice-list" type="A">
                {question.choices.map((choice) => (
                  <li key={`${question.id}-${choice.label}`}>
                    <span>{choice.text}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export function RelevantQuestionsScreen({ module, onBack }: RelevantQuestionsScreenProps) {
  const units = module.relevantQuestions.units
  const totalQuestions = units.reduce((sum, unit) => sum + unit.questions.length, 0)

  return (
    <div className="questions-screen">
      <div className="top-row">
        <TopButton onClick={onBack}>Volver</TopButton>
      </div>
      <TitleBar>{module.title}</TitleBar>
      <p className="intro">{totalQuestions} preguntas relevantes.</p>

      <div className="question-unit-list">
        {units.map((unit) => (
          <QuestionUnitDropdown key={unit.title} unit={unit} />
        ))}
      </div>
    </div>
  )
}
