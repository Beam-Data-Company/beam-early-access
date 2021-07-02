import '../styles/globals.css'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
