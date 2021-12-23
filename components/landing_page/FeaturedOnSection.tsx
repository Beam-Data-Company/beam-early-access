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
          src={ForbesLogo}
          width={90}
          height={60}
          alt="Forbes Logo"
          priority
        />
        <Image
          src={BangkokPostLogo}
          width={153}
          height={28}
          alt="Bangkok Post Logo"
          priority
        />
        <Image
          src={MediumLogo}
          height={45}
          width={180}
          alt="Medium Logo"
          priority
        />
        <Image
          src={ForbesLogo}
          width={90}
          height={60}
          alt="Forbes Logo"
          priority
        />
        <Image
          src={BangkokPostLogo}
          width={153}
          height={28}
          alt="Bangkok Post Logo"
          priority
        />
      </div>
    </div>
  )
}
