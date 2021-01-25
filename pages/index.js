import styled from 'styled-components'
import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1 style={{fontSize:"22px"}}>Anne With An "E" Quiz</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Quer testar seus conhecimentos sobre Anne With An "E"?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
          <h1 style={{fontSize:"22px"}}>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Quiz 1</p>
            <p>Quiz 2</p>
            <p>Quiz 3</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/irizzo/quiz" />
    </QuizBackground>
  )
}