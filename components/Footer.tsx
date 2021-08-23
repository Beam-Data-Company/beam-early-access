import styles from './Footer.module.css'
import Image from 'next/image'
import beamLogo from '../public/footer/beam-logo.png'
import appStoreButton from '../public/footer/app-store-button.png'
import googlePlayButton from '../public/footer/google-play-button.png'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top_section}>

        <div className={styles.logo_container}>
          <div className={styles.beam_logo}>
            <Image src={beamLogo} alt="Beam Logo" />
          </div>
          <div className={styles.store_button}>
            <Image src={appStoreButton} alt="App Store" />
          </div>
          <div className={styles.store_button}>
            <Image src={googlePlayButton} alt="Google Play" />
          </div>
        </div>

        <>
        </>

      </div>

      <div className={styles.bottom_section}></div>
    </div>
  )
}
