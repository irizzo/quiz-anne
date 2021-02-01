/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/quiz'

export default function QuizaDaGaleraPage({ externalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen
        externalQuestions={externalDB.questions}
        externalBg={externalDB.bg}
      />
    </ThemeProvider>
  )
}

// eslint-disable-next-line consistent-return
export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___')
  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json()
        }
        throw new Error('Falha em pegar os dados')
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)

    return {
      props: {
        dbExterno,
      },
    }
  } catch (err) {
    context.res.send({
      error: err,
      message: 'error in',
    })
  }
}
