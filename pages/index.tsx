import Image from 'next/image'
import Header from '../components/Header'
import MailchimpApiForm from '../components/MailchimpApiForm'
import Demo from '../components/demo_pages/Demo'
import styles from '../styles/Home.module.css'
import shape1 from '../public/shape1.png'
import shape2 from '../public/shape2.png'
import shape3 from '../public/shape3.png'
import shape4 from '../public/shape4.png'
import shape5 from '../public/shape5.png'
import { useSpring, animated } from 'react-spring'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isTablet = useMediaQuery({ maxWidth: 1040 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isPhoneLandscape = useMediaQuery({ maxWidth: 850 }) && !isPortrait
  const isPhonePortrait = useMediaQuery({ maxWidth: 600 })

  const shapeArray = [
    { data: shape1, name: 'shape1', className: styles.shape1 },
    { data: shape2, name: 'shape2', className: styles.shape2 },
    { data: shape3, name: 'shape3', className: styles.shape3 },
    { data: shape4, name: 'shape4', className: styles.shape4 },
    { data: shape5, name: 'shape5', className: styles.shape5 },
  ]

  const renderShapes = () => {
    return shapeArray.map(({ data, name, className }) => {
      return (
        <animated.div className={className} style={shapeFadeIn} key={name}>
          <Image src={data} alt={name} placeholder="blur" priority />
        </animated.div>
      )
    })
  }

  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 70 },
    delay: 3400,
  })

  const fadeInFast = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 70 },
    delay: 200,
  })

  const slideLeft = useSpring({
    opacity: 1,
    transform: 'translate(30%, -50%)',
    from: { opacity: 0, transform: 'translate(120%, -50%)' },
    config: { tension: 70 },
    delay: 200,
  })

  const slideUp = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -15%)',
    from: { opacity: 0, transform: 'translate(-50%, 20%)' },
    config: { tension: 70 },
    delay: 200,
  })

  const shapeFadeIn = useSpring({
    to: { opacity: 0.7 },
    from: { opacity: 0 },
    config: { tension: 60 },
    delay: 2000,
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Header />

        {!isPhoneLandscape && (
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
        )}

        {renderShapes()}

        {/* phone screen */}
        <animated.div
          className={styles.phoneScreenPic}
          style={isTablet && isPortrait ? slideUp : slideLeft}
        >
          <Demo />
        </animated.div>

        <animated.div
          className={styles.main_container}
          style={isPhoneLandscape || isPhonePortrait ? fadeInFast : fadeIn}
        >
          <main className={styles.main}>
            <div className={styles.title_with_description_container}>
              <h1 className={styles.title}>Get Early Access</h1>
              <span className={styles.description}>
                Beam Instant Checkout, a frictionless customer experience on
                your social messaging platforms and website.
              </span>
            </div>
            <MailchimpApiForm />
          </main>
        </animated.div>
      </div>
    </div>
  )
}
