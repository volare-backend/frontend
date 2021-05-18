import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
