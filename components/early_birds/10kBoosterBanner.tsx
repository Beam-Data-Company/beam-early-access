import styles from './10kBoosterBanner.module.css'
import Image from 'next/image'
import TenKBoosterBannerPicture from '../../public/earlybird/10k-booster-banner-picture.png'
import Text from '../Text'
import Spacer from '../Spacer'
import { useMediaQuery } from 'react-responsive'

export default function TenKBoosterBanner() {
  const widthLessThan650 = useMediaQuery({ maxWidth: 650 })

  return (
    <div className={styles.container}>
      <div>
        <Image src={TenKBoosterBannerPicture} alt="Banner Picture" priority />
      </div>
      <div className={styles.gradient}></div>
      <div className={styles.text_container}>
        <Text
          family="Lexend Deca"
          color="#ffffff"
          size={widthLessThan650 ? 32 : 40}
        >
          10k BOOSTER
        </Text>
        <Spacer height={14} />
        <Text color="#ffffff" weight={400}>
          Boost your sales conversion instantly <br /> with #Beam10kBooster !
        </Text>
      </div>
    </div>
  )
}
