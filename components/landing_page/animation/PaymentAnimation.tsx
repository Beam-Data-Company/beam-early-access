import Image from 'next/image'
import styles from './PaymentAnimation.module.css'
import { animated } from 'react-spring'
import payment_1 from '../../../public/landing_page/animation/payment-1.png'
import payment_2 from '../../../public/landing_page/animation/payment-2.svg'
import payment_3 from '../../../public/landing_page/animation/payment-3.png'
import payment_4 from '../../../public/landing_page/animation/payment-4.svg'
import payment_5 from '../../../public/landing_page/animation/payment-5.png'
import { useFadeIn } from './useFadeIn'

type Props = {
  visible: boolean
}

export default function PaymentAnimation(props: Props) {
  const fadeIn1 = useFadeIn({ entering: props.visible, delayTime: 150 })
  const fadeIn2 = useFadeIn({ entering: props.visible, delayTime: 300 })
  const fadeIn3 = useFadeIn({ entering: props.visible, delayTime: 450 })
  const fadeIn4 = useFadeIn({ entering: props.visible, delayTime: 600 })

  return (
    <div className={styles.container}>
      <animated.div className={styles.payment_1} style={fadeIn1}>
        <Image src={payment_1} alt="Payment 1" priority />
      </animated.div>

      <animated.div className={styles.payment_2} style={fadeIn2}>
        <Image src={payment_2} alt="Payment 2" priority />
      </animated.div>

      <animated.div className={styles.payment_3} style={fadeIn2}>
        <Image src={payment_3} alt="Payment 3" priority />
      </animated.div>

      <animated.div className={styles.payment_4} style={fadeIn3}>
        <Image src={payment_4} alt="Payment 4" priority />
      </animated.div>

      <animated.div className={styles.payment_5} style={fadeIn4}>
        <Image src={payment_5} alt="Payment 5" priority />
      </animated.div>
    </div>
  )
}
