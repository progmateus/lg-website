import { GlobalStyle } from '@/styles/globals'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {

  const theme = {
    colors: {
      headerColor: '#3F5EAF',
      bodyColor: '#0C207A',
      ctaColor: "#FD7E14",
      topicServicesColor: " #0D2168"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>

  )
}
