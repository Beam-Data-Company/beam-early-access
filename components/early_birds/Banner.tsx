import styles from './Banner.module.css'
import Image from 'next/image'
import bannerPicture from '../../public/earlybird/banner-picture.png'
import Text from '../Text'
import Spacer from '../Spacer'
import { useMediaQuery } from 'react-responsive'

export default function Banner() {
  const widthLessThan600 = useMediaQuery({ maxWidth: 600 })

  return (
    <div className={styles.container}>
      <div className={styles.banner_picture}>
        <Image src={bannerPicture} alt="Banner Picture" priority />
      </div>
      <div className={styles.text_container}>
        <Text
          family="Lexend Deca"
          color="#3a52b8"
          size={widthLessThan600 ? 32 : 40}
        >
          #BeamEarlyBirds
        </Text>
        <Spacer height={13} />
        <Text color="#3a52b8" weight={600}>
          Feel Free, Free of Fees!
        </Text>
      </div>
    </div>
  )
}
