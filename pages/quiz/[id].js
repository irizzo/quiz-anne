/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/quiz'

// eslint-disable-next-line react/prop-types
export default function QuizaDaGaleraPage({ externalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen
        // eslint-disable-next-line react/prop-types
        externalQuestions={externalDB.questions}
        // eslint-disable-next-line react/prop-types
        externalBg={externalDB.bg}
      />
    </ThemeProvider>
  )
}

// fetch('https://aluraquiz-css.omariossouto.vercel.app/api/db')
//   .then((serverResponse) => {
//     if (serverResponse.ok) {
//       return serverResponse.json()
//     }
//     throw new Error('Falha em pegar os dados')
//   })
//   .then((responseObject) => {
//     console.log(responseObject)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// Next Server Side Rendering
// eslint-disable-next-line consistent-return
export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___')

  // Como a função é assíncrona podemos fazer assim:
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
