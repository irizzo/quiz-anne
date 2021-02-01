// Precisamos importar o react só por causa do eslint
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import db from '../db.json'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import Link from '../src/components/Link'
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
        <Widget
          as={motion.section}
          transition={{
            delay: 0,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1
              style={{ fontSize: '22px', fontWeight: '400' }}
            >
              Anne With An E Quiz
            </h1>
          </Widget.Header>

          <Widget.Content>
            <h2
              style={{
                fontFamily: '\'Montserrat\', sans-serif',
                fontWeight: '300',
                lineHeight: '18px',
              }}
            >
              Quer testar seus conhecimentos sobre Anne With An E?
            </h2>
            <form onSubmit={function enviarForm(e) {
              // impede o recamento padrão depois do submit
              e.preventDefault()
              // eslint-disable-next-line no-restricted-globals
              router.push(`/quiz?name=${name}`)
            }}
            >
              <Input
                onChange={(eventInfo) => setName(eventInfo.target.value)}
                placeholder="Digite Seu Nome"
                name="nomeDoJogador"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1
              style={{ fontSize: '22px', fontWeight: '400' }}
            >
              Quizes da Galera
            </h1>
          </Widget.Header>

          <Widget.Content>
            <ul>
              {db.external.map((link) => {
                const [projctName, githubUser] = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.')

                return (
                  <li key={link}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projctName}___${githubUser}`}
                    >
                      {`${githubUser}/${projctName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{
            duration: 0.6,
          }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/irizzo/quiz-anne" />
    </QuizBackground>
  )
}
