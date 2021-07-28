import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../styles/demo.module.css'
import ChatPage from '../components/demo_pages/ChatPage'
import PaymentPage from '../components/demo_pages/PaymentPage'
import ReceiptPage from '../components/demo_pages/ReceiptPage'

export default function Demo() {
  const [pageNumber, setPageNumber] = useState(1)

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 80 },
    delay: 1200,
  })

  const nextPage = () => {
    setPageNumber((pageNumber) => pageNumber + 1)
  }

  const backToFirstPage = () => {
    setPageNumber(1)
  }

  const displayPage = () => {
    if (pageNumber === 1) {
      return (
        <animated.div style={fadeIn}>
          <ChatPage buttonHandleClick={nextPage} />
        </animated.div>
      )
    }

    if (pageNumber === 2) {
      return (
        <animated.div style={fadeIn}>
          <PaymentPage buttonHandleClick={nextPage} />
        </animated.div>
      )
    }

    if (pageNumber === 3) {
      return (
        <animated.div style={fadeIn}>
          <ReceiptPage onClick={backToFirstPage} />
        </animated.div>
      )
    }
  }

  return <div className={styles.container}>{displayPage()}</div>
}
