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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat&display=swap');
</style>

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
            <h1>The B99 Master</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Quer testar seus conhecimentos sobre Brooklyn Nine-Nine?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
          <h1>Quizes da Galera</h1>
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