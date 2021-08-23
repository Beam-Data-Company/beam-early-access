import styles from './Footer.module.css'
import beamLogo from '../public/footer/beam-logo.png'
import appStoreButton from '../public/footer/app-store-button.png'
import googlePlayButton from '../public/footer/google-play-button.png'
import ImageBox from './ImageBox'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top_section}>
        <div className={styles.logo_container}>
          <ImageBox src={beamLogo} width={92} alt="Beam Logo" />
          <ImageBox src={appStoreButton} width={155} alt="App Store" />
          <ImageBox src={googlePlayButton} width={155} alt="Google Play" />
        </div>

        <></>
      </div>

      <div className={styles.bottom_section}></div>
    </div>
  )
}
