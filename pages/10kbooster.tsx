import TenKBoosterBanner from '../components/early_birds/10kBoosterBanner'
import TenKBoosterSignupForm from '../components/early_birds/10kBoosterSignupForm'
import styles from '../styles/10kbooster.module.css'
import Image from 'next/image'
import diamondIcon from '../public/earlybird/diamond-icon.png'
import triangleIcon from '../public/earlybird/triangle-icon.png'
import squareIcon from '../public/earlybird/square-icon.png'
import circleIcon from '../public/earlybird/circle-icon.png'
import Text from '../components/Text'
import Spacer from '../components/Spacer'
import TenKGiftCard from '../public/earlybird/10k-gift-card.png'
import CampaignLayout from '../components/early_birds/CampaignPageLayout'
import { useMediaQuery } from 'react-responsive'

const messageArray = [
  {
    icon: diamondIcon,
    englishMessage:
      'Beam One-Click Checkout, helping online stores and merchants to receive frictionless payments. Accept cards, e-wallets, mobile banking, BNPL, and many more - all in a click!',
    thaiMessage:
      'เปิดประสบการณ์รับชำระเงินรูปแบบใหม่ เพิ่มศักยภาพให้ร้านค้าสามารถรับชำระเงินผ่าน บัตรเครดิต/เดบิต, mobile banking, E-wallet และการผ่อนชำระ ได้ง่ายดาย เพียงหนึ่งคลิกเท่านั้น!',
  },
  {
    icon: triangleIcon,
    englishMessage: 'A special deal for new joiners!',
    thaiMessage: 'แคมเปญสุดพิเศษสำหรับร้านค้าใหม่',
  },
  {
    icon: squareIcon,
    englishMessage:
      'Enable all payment methods to receive 10,000 THB credit free, valid for 2 months!',
    thaiMessage:
      'เพียงเปิดทุกช่องการการรับชำระเงิน รับเครดิตสำหรับส่วนลดค่าธรรมเนียมฟรี มูลค่า 10,000 บาท',
  },
  {
    icon: circleIcon,
    englishMessage: 'Sign up now! Today - 18 july 2022',
    thaiMessage: 'สมัครเลย! วันนี้ - 18 กรกฎาคม 2022 เท่านั้น',
  },
]

export default function TenKBooster() {
  const widthLessThan650 = useMediaQuery({ maxWidth: 650 })

  const renderMessages = () =>
    messageArray.map(({ icon, englishMessage, thaiMessage }) => {
      return (
        <li className={styles.list_child} key={englishMessage}>
          <div className={styles.icon_container}>
            <Image src={icon} alt="Icon" width={12} height={12} priority />
          </div>
          <div>
            <Text size={18} weight={600}>
              {englishMessage}
            </Text>
            <Spacer height={6} />
            <Text color="#535353" family="Prompt">
              {thaiMessage}
            </Text>
          </div>
        </li>
      )
    })

  return (
    <CampaignLayout
      className={styles.background}
      banner={<TenKBoosterBanner />}
      form={<TenKBoosterSignupForm />}
      is10kBoosterPage
      noBackgroundShapes
    >
      <div className={styles.ten_k_gift_card}>
        <Image src={TenKGiftCard} alt="10k Gift Card Picture" priority />
      </div>
      <ul className={styles.message_list}>
        <Text family="Lexend Deca" size={widthLessThan650 ? 24 : 28}>
          10K for you!
        </Text>
        {renderMessages()}
      </ul>
    </CampaignLayout>
  )
}
