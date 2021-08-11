import styles from './Banner.module.css'
import Image from 'next/image'
import bannerPicture from '../../public/earlybird/banner-picture.png'

export default function Banner() {
  return (
    <div className={styles.container}>
      <Image src={bannerPicture} alt="Banner Picture" priority />
      <div className={styles.text_container}>
        <h1>#BeamEarlyBirds</h1>
        <h3>Feel Free, Free of Fees!</h3>
      </div>
    </div>
  )
}
