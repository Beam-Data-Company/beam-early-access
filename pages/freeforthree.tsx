import MobileBankingBanner from '../components/early_birds/MobileBankingBanner'
import SignupForm from '../components/early_birds/SignupForm'
import Header from '../components/Header'
import styles from '../styles/freeforthree.module.css'
import Image from 'next/image'
import Link from 'next/link'
import triangleIcon from '../public/earlybird/triangle-icon.png'
import squareIcon from '../public/earlybird/square-icon.png'
import circleIcon from '../public/earlybird/circle-icon.png'
import backgroundShapes from '../public/earlybird/background-shapes.png'
import { useMediaQuery } from 'react-responsive'
import Text from '../components/Text'
import Spacer from '../components/Spacer'
import mobileBankingPicture from '../public/earlybird/mobile-banking-picture.png'
import mobileBankingPicturePhone from '../public/earlybird/mobile-banking-picture-phone.png'
import { useState, useEffect } from 'react'

const messageArray = [
  {
    icon: triangleIcon,
    englishMessage: 'A special deal for new joiners!',
    thaiMessage: 'แคมเปญสุดพิเศษสำหรับร้านค้าใหม่ เพียงสมัครสมาชิกกับบีม',
  },
  {
    icon: squareIcon,
    englishMessage:
      'Sign up to get unlimited free fees for all mobile banking transactions, for up to 3 months!',
    thaiMessage:
      'ใช้บีมสำหรับการรับชำระเงินทุกช่องทาง ฟรีค่าธรรมเนียมสำหรับ mobile banking นานถึง 3 เดือน!',
  },
  {
    icon: circleIcon,
    englishMessage: 'Registration period: Today - 31 March 2022',
    thaiMessage: 'สมัครเลยวันนี้ ถึง 31 มีนาคม 2022 เท่านั้น',
  },
]

export default function BeamFreeForThree() {
  const isMoreThan815 = useMediaQuery({ maxWidth: 815 })
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

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

  const renderParagraphItems = () => {
    return (
      <p className={styles.paragraph}>
        {isMoreThan815 ? (
          <Text size={18} weight={600}>
            Beam One-Click Checkout, helping online stores and merchants to
            receive frictionless payments. Accept cards, e-wallets, mobile
            banking, BNPL and many more - all in a click!
            <br />
          </Text>
        ) : (
          <Text size={18} weight={600}>
            Beam One-Click Checkout, helping online stores and merchants to
            receive frictionless payments.
            <br />
            Accept cards, e-wallets, mobile banking, BNPL and many more - all in
            a click!
            <br />
          </Text>
        )}
        <Spacer height={8} />
        <Text color="#535353" family="Prompt">
          เปิดประสบการณ์รับชำระเงินรูปแบบใหม่ ช่วยให้การรับชำระเงินผ่าน mobile
          banking บัตรเครดิต/เดบิต
          <br />
          และ e-wallet ของร้านค้าออนไลน์เป็นเรื่องที่ง่ายดายเพียงหนึ่งคลิก
        </Text>
      </p>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.shapes_container}>
        <Image src={backgroundShapes} alt="Background Shapes" />
      </div>

      <div className={styles.main_container}>
        <MobileBankingBanner />

        <div className={styles.mobile_banking_picture}>
          <Image
            src={mobileBankingPicture}
            alt="Mobile Banking Picture"
            priority
          />
        </div>

        <div className={styles.mobile_banking_picture_phone}>
          <Image
            src={mobileBankingPicturePhone}
            alt="Mobile Banking Picture Phone"
            priority
          />
        </div>

        {renderParagraphItems()}

        <ul className={styles.message_list}>{renderMessages()}</ul>

        <SignupForm />

        {mounted && (
          <>
            <Spacer height={80} />

            <div className={styles.remarks}>
              <Text size={12} color="#535353" weight={600}>
                Remarks: By registering this campaign, you agree to Beam&apos;s{' '}
                <Link href="https://beamdata.co/privacy/" passHref>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="https://beamdata.co/terms-of-service/" passHref>
                  Terms and Conditions
                </Link>
                . We reserved the rights to refuse providing offers and/or
                promotions at any time, either for particular individuals or
                organizations at our discretion, with a given notice.
              </Text>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
