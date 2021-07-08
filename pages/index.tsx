import Image from 'next/image'
import Header from '../components/Header'
import MailchimpForm from '../components/MailchimpForm'
import styles from '../styles/Home.module.css'
import shapeLeft from '../public/shape-left.png'
import shapeRight from '../public/shape-right.png'
import phoneScreen from '../public/phone-screen.png'
import { useSpring, animated } from 'react-spring'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isTablet = useMediaQuery({ maxWidth: 1040 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 70 },
  })

  const slideRight = useSpring({
    opacity: 1,
    transform: 'translate(70%, -50%)',
    from: { opacity: 0, transform: 'translate(120%, -50%)' },
    config: { tension: 80 },
    delay: 1200,
  })

  const slideUp = useSpring({
    opacity: 1,
    transform: 'translate(-50%, 0%)',
    from: { opacity: 0, transform: 'translate(-50%, 20%)' },
    config: { tension: 80 },
    delay: 1200,
  })

  const shapeFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 30 },
    delay: 2400,
  })

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

        {/* shape left */}
        <animated.div className={styles.shapeLeftPic} style={shapeFadeIn}>
          <Image src={shapeLeft} alt="Shape Left" placeholder="blur" priority />
        </animated.div>

        {/* shape right */}
        <animated.div className={styles.shapeRightPic} style={shapeFadeIn}>
          <Image
            src={shapeRight}
            alt="Shape Right"
            placeholder="blur"
            priority
          />
        </animated.div>

        {/* phone screen */}
        <animated.div
          className={styles.phoneScreenPic}
          style={isTablet && isPortrait ? slideUp : slideRight}
        >
          <Image
            src={phoneScreen}
            alt="Phone Screen"
            placeholder="blur"
            priority
          />
        </animated.div>

        <animated.div className={styles.main_container} style={fadeIn}>
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
        </animated.div>
      </div>
    </div>
  )
}
