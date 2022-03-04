import Image from 'next/image'
import styles from './SalesChannelAnimation.module.css'
import { animated } from 'react-spring'
import sales_channel_1 from '../../../public/landing_page/animation/sales-channel-1.png'
import sales_channel_2 from '../../../public/landing_page/animation/sales-channel-2.png'
import sales_channel_3 from '../../../public/landing_page/animation/sales-channel-3.png'
import sales_channel_4 from '../../../public/landing_page/animation/sales-channel-4.png'
import { useFadeIn } from './useFadeIn'

type Props = {
  visible: boolean
}

export default function SalesChannelAnimation(props: Props) {
  const fadeIn1 = useFadeIn({ entering: props.visible, delayTime: 150 })
  const fadeIn2 = useFadeIn({ entering: props.visible, delayTime: 300 })
  const fadeIn3 = useFadeIn({ entering: props.visible, delayTime: 450 })
  const fadeIn4 = useFadeIn({ entering: props.visible, delayTime: 600 })

  return (
    <div className={styles.container}>
      <animated.div className={styles.sales_channel_1} style={fadeIn1}>
        <Image src={sales_channel_1} alt="Sales Channel 1" priority />
      </animated.div>

      <animated.div className={styles.sales_channel_2} style={fadeIn2}>
        <Image src={sales_channel_2} alt="Sales Channel 2" priority />
      </animated.div>

      <animated.div className={styles.sales_channel_3} style={fadeIn3}>
        <Image src={sales_channel_3} alt="Sales Channel 3" priority />
      </animated.div>

      <animated.div className={styles.sales_channel_4} style={fadeIn4}>
        <Image src={sales_channel_4} alt="Sales Channel 4" priority />
      </animated.div>
    </div>
  )
}
