import Banner from '../components/early_birds/Banner'
import SignupForm from '../components/early_birds/SignupForm'
import styles from '../styles/earlybird.module.css'
import Image from 'next/image'
import birdLeft from '../public/earlybird/bird-left.png'
import birdRight from '../public/earlybird/bird-right.png'
import triangleIcon from '../public/earlybird/triangle-icon.png'
import squareIcon from '../public/earlybird/square-icon.png'
import circleIcon from '../public/earlybird/circle-icon.png'
import { useMediaQuery } from 'react-responsive'
import Text from '../components/Text'
import Spacer from '../components/Spacer'
import CampaignLayout from '../components/early_birds/CampaignPageLayout'

const messageArray = [
  {
    icon: triangleIcon,
    englishMessage: 'Sign up today get unlimited free fees of up to 3 months',
    thaiMessage:
      'ฟรีค่าธรรมเนียม ใช้บีมรับชำระสินค้าในร้านของคุณได้ไม่จำกัด สูงสุดถึง 3 เดือน',
  },
  {
    icon: squareIcon,
    englishMessage:
      'A special campaign for online stores focused on social commerce',
    thaiMessage: 'สิทธิพิเศษสำหรับร้านค้าออนไลน์เท่านั้น',
  },
  {
    icon: circleIcon,
    englishMessage: 'Register today! Limited quotas available',
    thaiMessage: 'รีบสมัครเลยวันนี้! รับจำนวนจำกัด',
  },
]

export default function Earlybird() {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })
  const isSmallPhonePortrait = useMediaQuery({ maxWidth: 350 })

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

  const renderParagraph = () => {
    return (
      <p className={styles.paragraph}>
        {isSmallPhonePortrait ? (
          <Text size={18} weight={600}>
            Beam Instant Checkout, introducing
            <br />
            the world&apos;s simplest way to checkout.
            <br />
            Helping you maximise your online sales.
            <br />
            Accept credit card, wallet and
            <br />
            mobile banking!
            <br />
          </Text>
        ) : isPhonePortrait ? (
          <Text size={18} weight={600}>
            Beam Instant Checkout, introducing
            <br />
            the world&apos;s simplest way to checkout.
            <br />
            Helping you maximise your online sales.
            <br />
            Accept credit card, wallet and mobile banking!
            <br />
          </Text>
        ) : (
          <Text size={18} weight={600}>
            Beam Instant Checkout, introducing the world&apos;s simplest way to
            checkout.
            <br />
            Helping you maximise your online sales. Accept credit card, wallet
            and mobile banking!
            <br />
          </Text>
        )}
        <Text color="#535353" family="Prompt">
          เปิดประสบการณ์ชำระเงินให้ง่ายดาย รวดเร็ว
          และเพิ่มความสามารถทางการขายของคุณให้มากยิ่งขึ้น
        </Text>
      </p>
    )
  }

  return (
    <CampaignLayout
      className={styles.background}
      banner={<Banner />}
      form={<SignupForm />}
      boxShadow
    >
      <div className={styles.bird_left}>
        <Image src={birdLeft} alt="Bird Left" priority />
      </div>
      <div className={styles.bird_right}>
        <Image src={birdRight} alt="Bird Right" priority />
      </div>

      {renderParagraph()}

      <ul className={styles.message_list}>{renderMessages()}</ul>
    </CampaignLayout>
  )
}
