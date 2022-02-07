import GetStartedBanner from '../components/early_birds/GetStartedBanner'
import SignupForm from '../components/early_birds/GetStartedSignupForm'
import Header from '../components/Header'
import styles from '../styles/getstarted.module.css'
import Image from 'next/image'
import Link from 'next/link'
import backgroundShapes from '../public/earlybird/background-shapes.png'
import Text from '../components/Text'
import Spacer from '../components/Spacer'

export default function GetStarted() {
  const renderDescription = () => {
    return (
      <div className={styles.description_container}>
        <h3 className={styles.description}>
          <Text size={18} weight={600}>
            I would like to offer frictionless payments - including cards,
            e-&#8288;wallets, mobile&nbsp;banking, BNPL and many more, all in a
            click. Register my interest with Beam!
          </Text>
        </h3>
        <Spacer height={4} />
        <h3 className={styles.description}>
          <Text color="#535353" family="Prompt" size={16}>
            เปิดประสบการณ์รับชำระ&#8288;เงินรูปแบบใหม่
            ช่วยให้การรับชำระ&#8288;เงินผ่าน mobile&nbsp;banking
            บัตร&#8288;เครดิต/&#8288;เดบิต และ e-&#8288;wallet
            ของร้านค้าออนไลน์เป็นเรื่องที่ง่ายดายเพียงหนึ่งคลิก
          </Text>
        </h3>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.shapes_container}>
        <Image src={backgroundShapes} alt="Background Shapes" />
      </div>

      <div className={styles.main_container}>
        <GetStartedBanner />
        {renderDescription()}
        <SignupForm />

        <div className={styles.remarks}>
          <Text size={12} color="#535353" weight={600}>
            Remarks: By registering this campaign, you agree to Beam&apos;s{' '}
            <Link href="https://www.beamcheckout.com/privacy" passHref>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="https://www.beamcheckout.com/tncs" passHref>
              Terms and Conditions
            </Link>
            . We reserved the rights to refuse providing offers and/or
            promotions at any time, either for particular individuals or
            organizations at our discretion, with a given notice.
          </Text>
        </div>
      </div>
    </div>
  )
}
