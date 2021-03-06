import Image from 'next/image'
import logo from '../public/logo.svg'
import styles from './Header.module.css'
import StartedModal from './StartedModal'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [startedModalVisible, setStartedModalVisible] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="https://beamcheckout.com" passHref>
          <a>
            <Image src={logo} alt="Beam Logo" priority />
          </a>
        </Link>
      </div>

      {/* will bring this button back when the lighthouse website is ready */}
      {/* <button
        className={styles.getStartedButton}
        onClick={() => setStartedModalVisible(true)}
      >
        Get Started
      </button> */}

      <StartedModal
        isOpen={startedModalVisible}
        onClose={() => setStartedModalVisible(false)}
      />
    </header>
  )
}
