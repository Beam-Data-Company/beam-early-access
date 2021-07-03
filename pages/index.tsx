import Image from 'next/image'

import MailchimpForm from '../components/MailchimpForm'
import styles from '../styles/Home.module.css'
import logo from '../logo.svg'
import iphone12 from '../iphone12.png'
import blackDesktop from '../black-desktop.png'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} alt="Beam Logo" />
        </div>
      </header>

      <svg
        className={styles.svgWrapper}
        preserveAspectRatio="none"
        width="1440"
        height="500"
        viewBox="0 0 1440 500"
      >
        <path
          fill="#000a33"
          d="M0,1700 L0,370 L1440,0 L1440,1700 L0,1700 Z"
        ></path>
      </svg>

      <div className={styles.laptopPic}>
        <Image
          src={blackDesktop}
          alt="Black Desktop"
          placeholder="blur"
          priority
        />
      </div>

      <div className={styles.iphonePic}>
        <Image src={iphone12} alt="iPhone12" placeholder="blur" priority />
      </div>

      <div className={styles.main_container}>
        <main className={styles.main}>
          <div className={styles.title_with_description_container}>
            <h1 className={styles.title}>Get Early Access</h1>
            <span className={styles.description}>
              Beam Instant Checkout, a frictionless customer experience on your
              social messaging platforms and website.
            </span>
          </div>
          <MailchimpForm />
        </main>
      </div>
    </div>
  )
}
