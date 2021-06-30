import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MailchimpFormContainer from '../components/MailchimpForm'
import logo from '../logo.svg'
import iphone12 from '../iphone12.png'
import blackDesktop from '../black-desktop.png'

export default function Home() {
  return (
    <div className={styles.bg}>
      
      <Head>
        <title>Beam Data Early Access</title>
        {/* <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image src={logo}  alt="Beam Logo" />
          </div>
        </header>

        <div className={styles.iphonePic}>
          <Image src={iphone12} alt="iPhone12"/>
        </div>

        <div className={styles.laptopPic}>
          <Image src={blackDesktop} alt="Black Desktop"/>
        </div>

        <div style={{zIndex:4}}>
          <MailchimpFormContainer/>
        </div>
        
      </div>
      
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1200"> 
            <path fill="#000a33" fillOpacity="1" d="M0,1200 L0,370 L1440,0 L1440,1200 L0,1200 Z"></path>
        </svg>
      </div>

    </div>
  )
}
