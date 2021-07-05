import Image from 'next/image'
import Header from '../components/Header'
import MailchimpForm from '../components/MailchimpForm'
import styles from '../styles/Home.module.css'
import phoneScreen from '../phone-screen.png'
import shapeLeft from '../shape-left.png'
import shapeRight from '../shape-right.png'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Header />

        <svg
          className={styles.svgWrapper}
          preserveAspectRatio="none"
          width="1440"
          height="500"
          viewBox="0 0 1440 500"
        >
          <path
            fill="#000a33"
            d="M0,500 L0,370 L1440,0 L1440,500 L0,500 Z"
          ></path>
        </svg>

        <div className={styles.shapeLeftPic}>
          <Image src={shapeLeft} alt="Shape Left" placeholder="blur" priority />
        </div>

        <div className={styles.shapeRightPic}>
          <Image
            src={shapeRight}
            alt="shapeRight"
            placeholder="blur"
            priority
          />
        </div>

        <div className={styles.phoneScreenPic}>
          <Image
            src={phoneScreen}
            alt="Phone Screen"
            placeholder="blur"
            priority
          />
        </div>

        <div className={styles.main_container}>
          <main className={styles.main}>
            <div className={styles.title_with_description_container}>
              <h1 className={styles.title}>Get Early Access</h1>
              <span className={styles.description}>
                Beam Instant Checkout, a frictionless customer experience on
                your social messaging platforms and website.
              </span>
            </div>
            <MailchimpForm />
          </main>
        </div>
      </div>
    </div>
  )
}
