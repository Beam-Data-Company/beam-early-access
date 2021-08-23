import Header from './Header'
import styles from './PageBanner.module.css'
import Text from './Text'
import lockImage from '../public/lock-image.png'
import ImageBox from './ImageBox'

export default function PageBanner() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Text family="Lexend Deca" size={32} color="white">
          Privacy by Design
        </Text>

        <div className={styles.image_wrapper}>
          <ImageBox width={113} src={lockImage} alt="Lock Image" />
          <ImageBox width={113} src={lockImage} alt="Lock Image" />
          <ImageBox width={113} src={lockImage} alt="Lock Image" />
        </div>
      </div>
    </div>
  )
}
