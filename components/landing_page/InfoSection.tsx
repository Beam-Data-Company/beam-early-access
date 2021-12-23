import styles from './InfoSection.module.css'
import OneClickPicture from '../../public/landing_page/one-click-picture.png'
import PaymentPicture from '../../public/landing_page/payment-picture.png'
import NoCodingPicture from '../../public/landing_page/no-coding-picture.png'
import triangleIcon from '../../public/earlybird/triangle-icon.png'
import squareIcon from '../../public/earlybird/square-icon.png'
import circleIcon from '../../public/earlybird/circle-icon.png'
import Image from 'next/image'
import Text from '../Text'
import { useMediaQuery } from 'react-responsive'

type InfoType = {
  icon: StaticImageData
  message: string
}

const OneClickInfoArray = [
  {
    icon: triangleIcon,
    message: 'Beam on any social messaging app DM and e-commerce website',
  },
  {
    icon: squareIcon,
    message:
      'Proven to help you grow your e-commerce business: 30% higher conversions & improved loyalty',
  },
]

const PaymentInfoArray = [
  {
    icon: triangleIcon,
    message:
      'We connect to a range of payment methods so that you don’t have to: Major credit/debit cards, e-wallets, mobile banking, crypto, buy now pay later and regular installments',
  },
  {
    icon: squareIcon,
    message:
      'A simple & low fee per transaction. That’s it, no other hidden fees',
  },
]

const NoCodingInfoArray = [
  {
    icon: triangleIcon,
    message:
      'No integration is required to use Beam on social commerce, get started in minutes',
  },
  {
    icon: circleIcon,
    message: 'E-commerce website plug-ins available with the simplest APIs',
  },
  {
    icon: squareIcon,
    message:
      'Stick to your business-as-usual processes let us integrate your existing solutions for you',
  },
]

const renderInfo = (array: InfoType[]) =>
  array.map(({ icon, message }) => {
    return (
      <li className={styles.list_child} key={message}>
        <div className={styles.icon_container}>
          <Image src={icon} alt="Icon" width={20} height={20} priority />
        </div>
        <Text color="#ffffff" family="Assistant">
          {message}
        </Text>
      </li>
    )
  })

export default function InfoSection() {
  const isIpadPortraitAndPhone = useMediaQuery({ maxWidth: 1040 })
  const isPhone = useMediaQuery({ maxWidth: 600 })

  return (
    <>
      <div className={styles.wrapper}>
        {isIpadPortraitAndPhone && (
          <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
            The one-click experience {isPhone && <br />}on your sales channel
          </Text>
        )}
        <div className={styles.message_image_wrapper}>
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                The one-click experience on
                <br />
                your sales channel
              </Text>
            )}
            <ul className={styles.info_list}>
              {renderInfo(OneClickInfoArray)}
            </ul>
          </div>

          <div className={styles.image_box}>
            <Image src={OneClickPicture} alt="One Click Picture" priority />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        {isIpadPortraitAndPhone && (
          <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
            Accept all payment {isPhone && <br />}methods &#38; model
          </Text>
        )}
        <div className={styles.message_image_wrapper}>
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                Offer all the payment methods
                <br />
                your customers love
              </Text>
            )}
            <ul className={styles.info_list}>{renderInfo(PaymentInfoArray)}</ul>
          </div>
          <div className={styles.image_box}>
            <Image src={PaymentPicture} alt="Payment Picture" priority />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        {isIpadPortraitAndPhone && (
          <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
            No coding needed{isPhone && <br />}for social commerce
          </Text>
        )}
        <div className={styles.message_image_wrapper}>
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                No coding needed
                <br />
                for social commerce
              </Text>
            )}
            <ul className={styles.info_list}>
              {renderInfo(NoCodingInfoArray)}
            </ul>
          </div>
          <div className={styles.image_box}>
            <Image src={NoCodingPicture} alt="NoCodingPicture" priority />
          </div>
        </div>
      </div>
    </>
  )
}
