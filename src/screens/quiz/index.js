/* eslint-disable comma-dangle */
import React from 'react'

import AlternativesForm from '../../components/AlternativesForm'
import BackLinkArrow from '../../components/BackLinkArrow'
import Button from '../../components/Button'
import GitHubCorner from '../../components/GitHubCorner'
import QuizBackground from '../../components/QuizBackground'
import QuizContainer from '../../components/QuizContainer'
import QuizLogo from '../../components/QuizLogo'
import Widget from '../../components/Widget'

// eslint-disable-next-line react/prop-types
function ResultsWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados</h1>
      </Widget.Header>

      <Widget.Content>
        <h2>
          Você Acertou
          {' '}
          {/* eslint-disable-next-line react/prop-types */}
          <span
            style={{
              color: `${db.theme.colors.primary}`,
              fontSize: '25px',
            }}
          >
            {/* eslint-disable-next-line react/prop-types */}
            {results.filter((result) => result).length}
          </span>
          {' '}
          Questões
        </h2>
        <ul>
          {/* eslint-disable-next-line react/prop-types */}
          {results.map((result, index) => (
            <li key={`result_${result}`}>
              Pergunta
              {' 0'}
              {index + 1}
              {' :'}
              {result === true ? ' Acertou :D' : ' Errou :('}
            </li>
          ))}

        </ul>
      </Widget.Content>
    </Widget>
  )
}

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
  // eslint-disable-next-line react/prop-types
  addResult,
}) {
  const questionID = `question_${questionIndex}`
  // eslint-disable-next-line max-len
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
  // eslint-disable-next-line react/prop-types
  const isCorrect = selectedAlternative === question.answer
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false)

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
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

        <AlternativesForm onSubmit={(eventInfo) => {
          eventInfo.preventDefault()
          setIsQuestionSubmited(true)
          setTimeout(() => {
            addResult(isCorrect)
            onSubmit()
            setIsQuestionSubmited(false)
            setSelectedAlternative(undefined)
          }, 3 * 1000)
        }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative_${alternativeIndex}`
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
            const isSelected = selectedAlternative === alternativeIndex
            return (
              <Widget.Topic
                as="label"
                key={alternativeID}
                htmlFor={alternativeID}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  id={alternativeID}
                  type="radio"
                  name={questionID}
                  style={{ display: 'none' }}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button type="submit" disabled={selectedAlternative === undefined}>
            Confirmar
          </Button>

          <p>
            selected:
            {` ${selectedAlternative}`}
          </p>
          {isQuestionSubmited && isCorrect && <p>Você Acertou</p>}
          {isQuestionSubmited && !isCorrect && <p>Você Errou</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULTS: 'RESULTS',
}

// eslint-disable-next-line react/prop-types
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  // eslint-disable-next-line react/prop-types
  const questionsTotal = externalQuestions.length
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = externalQuestions[questionIndex]
  const [results, setResults] = React.useState([])
  const bg = externalBg

  function addResult(result) {
    setResults([
      ...results,
      result,
    ])
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1300)
  }, [])

  function handleQuizSubmit() {
    const nextQuestionIndex = questionIndex + 1
    if (nextQuestionIndex < (questionsTotal)) {
      setCurrentQuestion(questionIndex + 1)
    } else {
      setScreenState(screenStates.RESULTS)
    }
  }
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            questionsTotal={questionsTotal}
            onSubmit={handleQuizSubmit}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.RESULTS && (
          <ResultsWidget results={results} />
        )}

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/irizzo/quiz-anne" />
    </QuizBackground>
  )
}
