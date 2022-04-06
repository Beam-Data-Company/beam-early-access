import Image from 'next/image'
import styles from './SocialCommerceAnimation.module.css'
import { animated } from 'react-spring'
import social_commerce_1 from '../../../public/landing_page/animation/social-commerce-1.svg'
import social_commerce_2 from '../../../public/landing_page/animation/social-commerce-2.svg'
import social_commerce_3 from '../../../public/landing_page/animation/social-commerce-3.png'
import social_commerce_4 from '../../../public/landing_page/animation/social-commerce-4.svg'
import social_commerce_5 from '../../../public/landing_page/animation/social-commerce-5.svg'
import social_commerce_6 from '../../../public/landing_page/animation/social-commerce-6.png'
import { useFadeIn } from './useFadeIn'

type Props = {
  visible: boolean
}

export default function SocialCommerceAnimation(props: Props) {
  const fadeIn1 = useFadeIn({ entering: props.visible, delayTime: 150 })
  const fadeIn2 = useFadeIn({ entering: props.visible, delayTime: 300 })
  const fadeIn3 = useFadeIn({ entering: props.visible, delayTime: 450 })
  const fadeIn4 = useFadeIn({ entering: props.visible, delayTime: 600 })

  return (
    <div className={styles.container}>
      <animated.div className={styles.animation5_1} style={fadeIn1}>
        <Image src={social_commerce_1} alt="Social Commerce 1" priority />
      </animated.div>

      <animated.div className={styles.animation5_2} style={fadeIn1}>
        <Image src={social_commerce_2} alt="Social Commerce 2" priority />
      </animated.div>

      <animated.div className={styles.animation5_3} style={fadeIn2}>
        <Image src={social_commerce_3} alt="Social Commerce 3" priority />
      </animated.div>

      <animated.div className={styles.animation5_4} style={fadeIn3}>
        <Image src={social_commerce_4} alt="Social Commerce 4" priority />
      </animated.div>

      <animated.div className={styles.animation5_5} style={fadeIn4}>
        <Image src={social_commerce_5} alt="Social Commerce 5" priority />
      </animated.div>

      <animated.div className={styles.animation5_6} style={fadeIn4}>
        <Image src={social_commerce_6} alt="Social Commerce 6" priority />
      </animated.div>
    </div>
  )
}
