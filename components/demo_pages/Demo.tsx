import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Demo.module.css'
import ChatPage from './ChatPage'
import PaymentPage from './PaymentPage'
import ReceiptPage from './ReceiptPage'

export default function Demo() {
  const [pageNumber, setPageNumber] = useState(1)

  const tagFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 70 },
    delay: 2000,
  })

  const nextPage = () => {
    setPageNumber((pageNumber) => pageNumber + 1)
  }

  const Page1 = ({ pageNumber }: { pageNumber: number }) => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })

    if (pageNumber % 3 === 1) {
      return (
        <animated.div style={fadeIn}>
          <ChatPage goToPaymentPage={nextPage} />
        </animated.div>
      )
    } else {
      if (pageNumber % 3 === 2) {
        return (
          <div className={styles.temp}>
            <ChatPage goToPaymentPage={nextPage} />
          </div>
        )
      } else {
        return null
      }
    }
  }

  const Page2 = ({ pageNumber }: { pageNumber: number }) => {
    const slideUp = useSpring({
      opacity: 1,
      transform: 'translate(0%, 0%)',
      from: { opacity: 0.9, transform: 'translate(0%, 100%)' },
      config: { tension: 120 },
    })

    if (pageNumber % 3 === 2) {
      return (
        <animated.div style={slideUp}>
          <PaymentPage goToReceiptPage={nextPage} />
        </animated.div>
      )
    } else {
      return null
    }
  }

  const Page3 = ({ pageNumber }: { pageNumber: number }) => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })

    if (pageNumber % 3 === 0) {
      return (
        <animated.div style={fadeIn}>
          <ReceiptPage goToChatPage={nextPage} />
        </animated.div>
      )
    } else {
      return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.phone_demo_container}>
        <Page1 pageNumber={pageNumber} />
        <Page2 pageNumber={pageNumber} />
        <Page3 pageNumber={pageNumber} />
      </div>
      <animated.div style={tagFadeIn} className={styles.try_demo_tag}>Try Demo</animated.div>
    </div>
  )
}
