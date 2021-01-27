import React from 'react'

import db from '../db.json'
// import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1 style={{ fontSize: '22px', fontWeight: '400' }}>Pergunta 1 de 5</h1>
          </Widget.Header>

          <Widget.Content>
            <h2 style={{ fontFamily: '\'Montserrat\', sans-serif', fontWeight: '300' }}> Quantos anos Anne tinha quando foi adotada pelos irmãos A?</h2>
            <Widget.Image backgroundImage={db.bg} />
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/irizzo/quiz-anne" />
    </QuizBackground>
  )
}
