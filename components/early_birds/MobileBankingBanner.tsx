import styles from './MobileBankingBanner.module.css'
import Image from 'next/image'
import mobileBankingBannerPicture from '../../public/earlybird/mobile-banking-banner-picture.png'
import Text from '../Text'
import Spacer from '../Spacer'
import { useMediaQuery } from 'react-responsive'

export default function MobileBankingBanner() {
  const widthLessThan650 = useMediaQuery({ maxWidth: 650 })

  return (
    <div className={styles.container}>
      <div className={styles.banner_picture}>
        <Image src={mobileBankingBannerPicture} alt="Banner Picture" priority />
      </div>
      <div className={styles.text_container}>
        <Text
          family="Lexend Deca"
          color="#ffffff"
          size={widthLessThan650 ? 32 : 40}
        >
          Free for Three!
        </Text>
        <Spacer height={14} />
        <Text color="#ffffff" weight={400}>
          {widthLessThan650
            ? 'Today - 31 March 2022'
            : 'Sign up today to receive free one-click mobile banking \n transactions for 3 months'}
        </Text>
      </div>
    </div>
  )
}
