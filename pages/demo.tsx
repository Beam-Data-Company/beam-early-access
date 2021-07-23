import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../styles/demo.module.css'
import ChatPage from '../components/demo_pages/ChatPage'
import PaymentPage from '../components/demo_pages/PaymentPage'
import ReceiptPage from '../components/demo_pages/ReceiptPage'

export default function Demo() {
  const [pageNumber, setPageNumber] = useState(1)

  const nextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  const firstPage = () => {
    setPageNumber(1)
  }

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 80 },
    delay: 1200,
  })

  return (
    <div className={styles.container}>
      {pageNumber === 1 ? (
        <animated.div style={fadeIn}>
          <ChatPage onClick={nextPage} />
        </animated.div>
      ) : pageNumber === 2 ? (
        <animated.div style={fadeIn}>
          <PaymentPage onClick={nextPage} />
        </animated.div>
      ) : (
        <animated.div style={fadeIn}>
          <ReceiptPage onClick={firstPage} />
        </animated.div>
      )}
    </div>
  )
}
