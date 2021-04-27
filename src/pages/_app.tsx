import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Auth } from '../auth/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </>
  )
}

export default MyApp
