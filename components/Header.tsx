import Image from 'next/image'
import logo from '../public/logo.svg'
import styles from './Header.module.css'
import StartedModal from './StartedModal'
import { useState } from 'react'

export default function Header() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Beam Logo" priority />
      </div>
      <button className={styles.button} onClick={handleClick}>
        Get Started
      </button>
      <StartedModal visible={showModal} setVisible={setShowModal} />
    </header>
  )
}
