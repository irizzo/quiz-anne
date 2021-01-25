import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import './_app.css'

// css global que o styled components cria
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.secondary};
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
