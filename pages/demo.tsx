import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../styles/demo.module.css'
import ChatPage from '../components/demo_pages/ChatPage'
import PaymentPage from '../components/demo_pages/PaymentPage'
import ReceiptPage from '../components/demo_pages/ReceiptPage'

export default function Demo() {
  const [pageNumber, setPageNumber] = useState(1)

  const nextPage = () => {
    setPageNumber((pageNumber) => pageNumber + 1)
  }

  type Props = {
    pageNumber: number
  }

  const Page1 = (props: Props) => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })

    if (props.pageNumber % 3 === 1) {
      return (
        <animated.div style={fadeIn}>
          <ChatPage goToPaymentPage={nextPage} />
        </animated.div>
      )
    } else {
      if (props.pageNumber % 3 === 2) {
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

  const Page2 = (props: Props) => {
    const slideUp = useSpring({
      opacity: 1,
      transform: 'translate(0%, 0%)',
      from: { opacity: 0.9, transform: 'translate(0%, 100%)' },
      config: { tension: 120 },
    })

    if (props.pageNumber % 3 === 2) {
      return (
        <animated.div style={slideUp}>
          <PaymentPage goToReceiptPage={nextPage} />
        </animated.div>
      )
    } else {
      return null
    }
  }

  const Page3 = (props: Props) => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })

    if (props.pageNumber % 3 === 0) {
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
      <Page1 pageNumber={pageNumber} />
      <Page2 pageNumber={pageNumber} />
      <Page3 pageNumber={pageNumber} />
    </div>
  )
}
