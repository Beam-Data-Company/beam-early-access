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
    message: 'Works on any social messaging app and e-\u00A0commerce website',
  },
  {
    icon: squareIcon,
    message:
      'Proven to help you grow your e-\u00A0commerce business with 30% higher sales conversions',
  },
]

const PaymentInfoArray = [
  {
    icon: triangleIcon,
    message:
      'We connect to a range of payment methods, so that you don’t have to: \n \nCredit & Debit Cards - E-\u00A0wallets - Mobile banking - Crypto - Buy now, pay later - and many more',
  },
  {
    icon: squareIcon,
    message:
      'Low fees per transaction and no hidden fees',
  },
]

const NoCodingInfoArray = [
  {
    icon: triangleIcon,
    message:
      'No integration required, get started in minutes',
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

  return (
    <>
      <div className={styles.wrapper}>
        {isIpadPortraitAndPhone && (
          <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
            The One-Click Experience {isPhone && <br />}on your Sales Channel
          </Text>
        )}
        <div className={styles.message_image_wrapper}>
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

          <div className={styles.image_box}>
            <Image src={OneClickPicture} alt="One Click Picture" priority />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        {isIpadPortraitAndPhone && (
          <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
            Offer all the Payment Methods
            <br />
            your Customers Love
          </Text>
        )}
        <div className={styles.message_image_wrapper}>
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
          <div className={styles.image_box}>
            <Image src={PaymentPicture} alt="Payment Picture" priority />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        {isIpadPortraitAndPhone && (
          <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
            Just Plug &#38; Play,{isPhone && <br />} No Coding Needed
          </Text>
        )}
        <div className={styles.message_image_wrapper}>
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
          <div className={styles.image_box}>
            <Image src={NoCodingPicture} alt="NoCodingPicture" priority />
          </div>
        </div>
      </div>
    </>
  )
}
