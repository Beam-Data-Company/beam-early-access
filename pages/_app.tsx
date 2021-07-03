import '../styles/globals.css'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Modal from 'react-modal';

import SEO from '../next-seo.config'

Modal.setAppElement('#__next');

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
