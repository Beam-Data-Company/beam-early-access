import styles from './InfoSection.module.css'
import triangleIcon from '../../public/earlybird/triangle-icon.png'
import squareIcon from '../../public/earlybird/square-icon.png'
import circleIcon from '../../public/earlybird/circle-icon.png'
import Image from 'next/image'
import Text from '../Text'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import PaymentAnimation from '../../components/landing_page/animation/PaymentAnimation'
import SalesChannelAnimation from '../../components/landing_page/animation/SalesChannelAnimation'
import SocialCommerceAnimation from '../../components/landing_page/animation/SocialCommerceAnimation'
import { Waypoint } from 'react-waypoint'

type InfoType = {
  icon: StaticImageData
  message: string
}

const OneClickInfoArray = [
  {
    icon: triangleIcon,
    message: 'Works on any social messaging app and e-\u2060commerce website',
  },
  {
    icon: squareIcon,
    message:
      'Proven to help you grow your e-\u2060commerce business with 30% higher sales conversions',
  },
]

const PaymentInfoArray = [
  {
    icon: triangleIcon,
    message:
      'We connect to a range of payment methods, so that you don’t have to:\n \nCredit & Debit Cards - E-\u2060wallets - Mobile banking - Crypto - Buy now, pay later - and many more',
  },
  {
    icon: squareIcon,
    message: 'Low fees per transaction and no hidden fees',
  },
]

const NoCodingInfoArray = [
  {
    icon: triangleIcon,
    message: 'No integration required, get started in minutes',
  },
  {
    icon: circleIcon,
    message: 'E-commerce website plug-ins available',
  },
  {
    icon: squareIcon,
    message:
      'Stick to your business-as-usual processes,\nlet us do the hard work',
  },
]

const renderInfo = (array: InfoType[]) =>
  array.map(({ icon, message }) => {
    return (
      <li className={styles.list_child} key={message}>
        <div className={styles.icon_container}>
          <Image src={icon} alt="Icon" width={20} height={20} priority />
        </div>
        <Text color="#ffffff" family="Assistant" size={18}>
          {message}
        </Text>
      </li>
    )
  })

export default function InfoSection() {
  const isIpadPortraitAndPhone = useMediaQuery({ maxWidth: 1040 })
  const isPhone = useMediaQuery({ maxWidth: 600 })

  const [salesChannelVisible, setSalesChannelVisible] = useState(false)
  const [paymentVisible, setPaymentVisible] = useState(false)
  const [socialCommerceVisible, setSocialCommerceVisible] = useState(false)

  const salesChannelInfoOnEnter = () => {
    setPaymentVisible(false)
    setSocialCommerceVisible(false)
    setSalesChannelVisible(true)
  }

  const paymentInfoOnEnter = () => {
    setSalesChannelVisible(false)
    setSocialCommerceVisible(false)
    setPaymentVisible(true)
  }

  const socialCommerceOnEnter = () => {
    setPaymentVisible(false)
    setSalesChannelVisible(false)
    setSocialCommerceVisible(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.picture_container}>
        <div className={styles.sticky_container}>
          <SalesChannelAnimation visible={salesChannelVisible} />
          <PaymentAnimation visible={paymentVisible} />
          <SocialCommerceAnimation visible={socialCommerceVisible} />
        </div>
      </div>

      <div className={styles.info_container}>
        <div className={styles.wrapper}>
          {isIpadPortraitAndPhone && (
            <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
              The One-Click Experience {isPhone && <br />}on your Sales Channel
            </Text>
          )}
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                The One-Click Experience
                <br />
                on your Sales Channel
              </Text>
            )}
            <ul className={styles.info_list}>
              {renderInfo(OneClickInfoArray)}
            </ul>
          </div>
        </div>
        <Waypoint onEnter={salesChannelInfoOnEnter} />

        <div className={styles.wrapper}>
          {isIpadPortraitAndPhone && (
            <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
              Offer all the Payment Methods
              <br />
              your Customers Love
            </Text>
          )}
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                Offer all the Payment Methods
                <br />
                your Customers Love
              </Text>
            )}
            <ul className={styles.info_list}>{renderInfo(PaymentInfoArray)}</ul>
          </div>
        </div>
        <Waypoint onEnter={paymentInfoOnEnter} />

        <div className={styles.wrapper}>
          {isIpadPortraitAndPhone && (
            <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
              Just Plug &#38; Play,{isPhone && <br />} No Coding Needed
            </Text>
          )}
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                Just Plug &#38; Play,
                <br />
                No Coding Needed
              </Text>
            )}
            <ul className={styles.info_list}>
              {renderInfo(NoCodingInfoArray)}
            </ul>
          </div>
        </div>
        <Waypoint onEnter={socialCommerceOnEnter} />
      </div>
    </div>
  )
}
