// Precisamos importar o react só por causa do eslint
import React from 'react'
import { useRouter } from 'next/router'

import db from '../db.json'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1 style={{ fontSize: '22px', fontWeight: '400' }}>Anne With An E Quiz</h1>
          </Widget.Header>

          <Widget.Content>
            <h2 style={{ fontFamily: '\'Montserrat\', sans-serif', fontWeight: '300', lineHeight: '18px' }}>Quer testar seus conhecimentos sobre Anne With An E?</h2>
            <form onSubmit={function enviarForm(e) {
              // impede o recamento padrão depois do submit
              e.preventDefault()
              // eslint-disable-next-line no-restricted-globals
              router.push(`/quiz?name=${name}`)
            }}
            >
              <Input
                // eslint-disable-next-line react/jsx-no-bind
                onChange={function getName(eventInfo) {
                  setName(eventInfo.target.value)
                }}
                placeholder="Digite Seu Nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1 style={{ fontSize: '22px', fontWeight: '400' }}>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Quiz 1</p>
            <p>Quiz 2</p>
            <p>Quiz 3</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/irizzo/quiz-anne" />
    </QuizBackground>
  )
}
