import Image from 'next/image'
import logo from '../public/logo.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Beam Logo" priority />
      </div>
    </header>
  )
}
