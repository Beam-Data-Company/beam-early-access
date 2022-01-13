import styles from './FeaturedOnSection.module.css'
import BangkokPostLogo from '../../public/landing_page/bangkok-post-logo.png'
import ForbesLogo from '../../public/landing_page/forbes-logo.png'
import MediumLogo from '../../public/landing_page/medium-logo.png'
import Image from 'next/image'
import Text from '../Text'

export default function FeaturedOnSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Text size={20} color="#ffffff">
          As featured on
        </Text>
      </div>
      <div className={styles.logo_container}>
        <Image
          src={BangkokPostLogo}
          width={180}
          height={33}
          alt="Bangkok Post Logo"
          priority
        />
        <Image
          src={ForbesLogo}
          width={110}
          height={31}
          alt="Forbes Logo"
          priority
        />
        <Image
          src={MediumLogo}
          width={180}
          height={36}
          alt="Medium Logo"
          priority
        />
      </div>
    </div>
  )
}
