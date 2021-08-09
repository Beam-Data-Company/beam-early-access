import Banner from '../components/early_birds/Banner'
import SignupForm from '../components/early_birds/SignupForm'
import Header from '../components/Header'
import styles from '../styles/earlybird.module.css'
import Image from 'next/image'
import birdTopLeft from '../public/earlybird/bird-icon-top-left.png'
import birdTopRight from '../public/earlybird/bird-icon-top-right.png'
import birdBottom from '../public/earlybird/bird-icon-bottom.png'
import TriangleIcon from '../public/earlybird/triangle-icon.png'
import SquareIcon from '../public/earlybird/square-icon.png'
import CircleIcon from '../public/earlybird/circle-icon.png'

export default function Earlybird() {
  const messageArray = [
    {
      icon: TriangleIcon,
      englishMessage:
        'Sign Up #BeamEarlyBirds, Free fees up to THB 120k in GMV',
      thaiMessage:
        'ฟรี GP สำหรับ SMEs รับชำระสินค้าในร้านของคุณได้สูงสุดถึง 120,000 บาท',
    },
    {
      icon: SquareIcon,
      englishMessage: 'An exclusive campaign for all merchants selling online',
      thaiMessage: 'สิทธิพิเศษสำหรับร้านค้าออนไลน์เท่านั้น',
    },
    {
      icon: CircleIcon,
      englishMessage: 'Register today! Limited quotas available',
      thaiMessage: 'รีบสมัครเลยวันนี้! รับจำนวนจำกัด',
    },
  ]

  const renderMessages = () => {
    return messageArray.map(({ icon, englishMessage, thaiMessage }) => {
      return (
        <li className={styles.list_child} key={englishMessage}>
          <div>
            <Image src={icon} alt="Icon" width="12px" height="12px" priority />
          </div>
          <div>
            <div>{englishMessage}</div>
            <div className={styles.thai_message}>{thaiMessage}</div>
          </div>
        </li>
      )
    })
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.bird_top_left}>
        <Image
          src={birdTopLeft}
          alt="Bird Top Left"
          width="204px"
          height="135px"
        />
      </div>
      <div className={styles.bird_top_right}>
        <Image
          src={birdTopRight}
          alt="Bird Top Right"
          width="168px"
          height="156px"
        />
      </div>
      <div className={styles.bird_bottom}>
        <Image
          src={birdBottom}
          alt="Bird Bottom"
          width="214px"
          height="203px"
        />
      </div>

      <div className={styles.main_container}>
        <Banner />
        <div className={styles.paragraph}>
          Beam Instant Checkout, introducing the world&apos;s simplest way to
          checkout
          <br />
          Helping you maximize your online sales. Accepted credit card, e-wallet
          and mobile banking!
          <br />
          <span className={styles.thai_message}>
            เปิดประสบการณ์ชำระเงินให้ง่ายดาย รวดเร็ว
            และเพิ่มความสามารถทางการขายของคุณให้มากยิ่งขึ้น
          </span>
        </div>

        <ul className={styles.message_list}>{renderMessages()}</ul>

        <SignupForm />

        <div className={styles.remarks}>
          Remarks: This compaign is applicable for mercchants with online sales
          of more than THB 20k/month. By registering this campaign, you agree to
          beams Privacy Policy and Terms and Conditions. We reserve the right to
          refuse providing offers and/or promotions at any time, either for
          particular individuals or organizations at our discretion.
        </div>
      </div>
    </div>
  )
}
