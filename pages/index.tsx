import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MailchimpFormContainer from '../components/MailchimpForm'
import logo from '../logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beam Data Early Access</title>
        {/* <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className={styles.header}>
        <Image src={logo} alt="Beam Logo" />
      </header>

      <MailchimpFormContainer />
    </div>
  )
}
