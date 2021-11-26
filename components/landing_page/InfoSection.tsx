import styles from './InfoSection.module.css'
import BoostSalesPicture from '../../public/landing_page/boost-sales-picture.png'
import PaymentPicture from '../../public/landing_page/payment-picture.png'
import triangleIcon from '../../public/earlybird/triangle-icon.png'
import squareIcon from '../../public/earlybird/square-icon.png'
import circleIcon from '../../public/earlybird/circle-icon.png'
import Spacer from '../Spacer'
import Image from 'next/image'
import Text from '../Text'
import ImageBox from '../ImageBox'

type InfoType = {
  icon: StaticImageData
  message: string
}

const BoostSalesInfoArray = [
  {
    icon: triangleIcon,
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
  },
  {
    icon: squareIcon,
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
  },
  {
    icon: circleIcon,
    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
  },
]

const PaymentInfoArray = [
  {
    icon: triangleIcon,
    message:
      'Once filled, the data is stored in your locker, ready for re-use in your next go.',
  },
  {
    icon: circleIcon,
    message:
      'Our magical scanner leverages AI OCR tech to read data from your ID or Passport and store it directly in your locker.',
  },
  {
    icon: squareIcon,
    message: 'Scan the form’s designated QR code to locate the form.',
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
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.message_container}>
          <Text color="#ffffff" size={32}>
            Boost your sales conversion rate
          </Text>
          <ul className={styles.info_list}>
            {renderInfo(BoostSalesInfoArray)}
          </ul>
        </div>

        <ImageBox
          src={BoostSalesPicture}
          width={590}
          alt="Boost Sales Picture"
        />
      </div>

      <Spacer height={160} />

      <div className={styles.wrapper}>
        <div className={styles.message_container}>
          <div>
            <Text color="#ffffff" size={32}>
              Accept all payment methods &#38; model
            </Text>
          </div>
          <ul className={styles.info_list}>{renderInfo(PaymentInfoArray)}</ul>
        </div>
        <ImageBox src={PaymentPicture} width={500} alt="Payment Picture" />
      </div>
    </>
  )
}
