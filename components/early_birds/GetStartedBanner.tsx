import styles from './GetStartedBanner.module.css'
import Text from '../Text'
import { useMediaQuery } from 'react-responsive'
import LifestylePicAnimation from './LifestylePicAnimation'

export default function GetStartedBanner() {
  const widthLessThan550 = useMediaQuery({ maxWidth: 550 })

  return (
    <div className={styles.container}>
      <div className={styles.banner_picture}>
        <LifestylePicAnimation />
      </div>
      <div className={styles.text_container}>
        <Text
          family="Lexend Deca"
          color="#ffffff"
          size={widthLessThan550 ? 32 : 40}
        >
          Register As Merchant
        </Text>
      </div>
    </div>
  )
}
