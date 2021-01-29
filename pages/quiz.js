import React from 'react'

import db from '../db.json'
import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

// eslint-disable-next-line react/prop-types
function LoadingWidget({ name }) {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <h2>{`Bem-Vind@ ${name}`}</h2>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget({
  // eslint-disable-next-line react/prop-types
  question,
  // eslint-disable-next-line react/prop-types
  questionIndex,
  // eslint-disable-next-line react/prop-types
  questionsTotal,
  // eslint-disable-next-line react/prop-types
  onSubmit,
}) {
  const questionID = `question_${questionIndex}`
  return (
    <Widget>
      <Widget.Header>
        <h1
          style={{ fontSize: '22px', fontWeight: '400' }}
        >
          {`Pergunta ${questionIndex + 1} de ${questionsTotal}`}
        </h1>
      </Widget.Header>

      <Widget.Content>
        <h2
          style={{
            fontFamily: '\'Montserrat\', sans-serif',
            fontWeight: '300',
          }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {question.title}
        </h2>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            marginTop: '20px',
          }}
          // eslint-disable-next-line react/prop-types
          src={question.image}
        />

        <p>
          {/* eslint-disable-next-line react/prop-types */}
          {question.description}
        </p>

        <form onSubmit={(eventInfo) => {
          eventInfo.preventDefault()
          onSubmit()
        }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative_${alternativeIndex}`
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeID}
              >
                <input
                  id={alternativeID}
                  type="radio"
                  name={questionID}
                  style={{ display: 'none' }}
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

export default function QuizPage() {
  // Efeitos (react effects)
  // quando você ta usando hooks: React.useEffect

  // quando vc ta usando classe:
  // nasce === didMount
  // atualizado === willUpdate
  // morre === willUnmount
  // const screenState = screenStates.LOADING
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  const questionsTotal = db.questions.length
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]

  React.useEffect(() => {
    // fetch...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1300)
    // nasce (didMount)
  }, [])

  function handleQuizSubmit() {
    const nextQuestionIndex = questionIndex + 1
    if (nextQuestionIndex < (questionsTotal)) {
      setCurrentQuestion(questionIndex + 1)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {/*
          if (screenState === screenStates.LOADING) {
            return <LoadingWidget />
          }
          é a mesma coisa que a comparação ali de baixo
        */}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            questionsTotal={questionsTotal}
            onSubmit={handleQuizSubmit}
          />
        )}
        {screenState === screenStates.RESULT && (
          <div>
            Você acertou X questões
          </div>
        )}

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/irizzo/quiz-anne" />
    </QuizBackground>
  )
}
