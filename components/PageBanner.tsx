import Header from './Header'
import styles from './PageBanner.module.css'
import Image from 'next/image'
import Text from './Text'
import lockImage from '../public/lock-image.png'


export default function PageBanner() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.wrapper}>
        <Text family="Lexend Deca" size={32} color="white">Privacy by Design</Text>

        <div className={styles.image_wrapper}>
          <div className={styles.image_box}><Image src={lockImage} alt="Lock Image" priority/></div>
          <div className={styles.image_box}><Image src={lockImage} alt="Lock Image" priority/></div>
          <div className={styles.image_box}><Image src={lockImage} alt="Lock Image" priority/></div>
        </div>

      </div>
    </div>
  )
}
