// Use Material-ui with SSR / SSG
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs

import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../theme'
import { Auth } from '../auth/auth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <RecoilRoot>
      <Auth>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Auth>
    </RecoilRoot>
  )
}

export default MyApp
