import Banner from '../components/early_birds/Banner'
import SignupForm from '../components/early_birds/SignupForm'
import Header from '../components/Header'
import styles from '../styles/earlybird.module.css'
import Image from 'next/image'
import birdTopLeft from '../public/earlybird/bird-icon-top-left.png'
import birdTopRight from '../public/earlybird/bird-icon-top-right.png'
import birdBottom from '../public/earlybird/bird-icon-bottom.png'
import triangleIcon from '../public/earlybird/triangle-icon.png'
import squareIcon from '../public/earlybird/square-icon.png'
import circleIcon from '../public/earlybird/circle-icon.png'
import backgroundShapes from '../public/earlybird/background-shapes.png'

const messageArray = [
  {
    icon: triangleIcon,
    englishMessage:
      'Sign up today get free fees of up to THB 120k in sales value',
    thaiMessage:
      'ฟรี GP สำหรับ SMEs รับชำระสินค้าในร้านของคุณได้สูงสุดถึง 120,000 บาท',
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
  const renderMessages = () => {
    return messageArray.map(({ icon, englishMessage, thaiMessage }) => {
      return (
        <li className={styles.list_child} key={englishMessage}>
          <div>
            <Image src={icon} alt="Icon" width="12px" height="12px" priority />
          </div>
          <div>
            <div className={styles.english_message}>{englishMessage}</div>
            <div className={styles.thai_message}>{thaiMessage}</div>
          </div>
        </li>
      )
    })
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.shapes_container}>
        <Image src={backgroundShapes} alt="Background Shapes" />
      </div>

      <div className={styles.main_container}>
        <Banner />

        <div className={styles.bird_top_left}>
          <Image src={birdTopLeft} alt="Bird Top Left" />
        </div>
        <div className={styles.bird_top_right}>
          <Image src={birdTopRight} alt="Bird Top Right" />
        </div>
        <div className={styles.bird_bottom}>
          <Image src={birdBottom} alt="Bird Bottom" />
        </div>

        <p className={styles.paragraph}>
          <span className={styles.english_message}>
            <b>Beam Instant Checkout,</b> introducing the world&apos;s simplest
            way to checkout
            <br />
            Helping you maximise your online sales. Accept credit card, wallet
            and mobile banking!
            <br />
          </span>
          <span className={styles.thai_message}>
            เปิดประสบการณ์ชำระเงินให้ง่ายดาย รวดเร็ว
            และเพิ่มความสามารถทางการขายของคุณให้มากยิ่งขึ้น
          </span>
        </p>

        <ul className={styles.message_list}>{renderMessages()}</ul>

        <SignupForm />

        <div className={styles.remarks}>
          Remarks: This campaign is applicable for stores with online sales
          value of over THB 20k/month. By registering this campaign, you agree
          to Beam&apos;s <b>Privacy Policy</b> and <b>Terms and Conditions</b>.
          We reserve the right to refuse providing offers and/or promotions at
          any time, either for particular individuals or organizations at our
          discretion.
        </div>
      </div>
    </div>
  )
}
