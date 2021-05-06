import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Auth } from '../auth/auth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </RecoilRoot>
    </>
  )
}

export default MyApp
