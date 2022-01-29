import GetStartedBanner from '../components/early_birds/GetStartedBanner'
import SignupForm from '../components/early_birds/GetStartedSignupForm'
import Header from '../components/Header'
import styles from '../styles/getstarted.module.css'
import Image from 'next/image'
import Link from 'next/link'
import backgroundShapes from '../public/earlybird/background-shapes.png'
import Text from '../components/Text'
import Spacer from '../components/Spacer'
import { useState, useEffect } from 'react'

export default function GetStarted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const renderDescription = () => {
    return (
      <p className={styles.description}>
        <Text size={18} weight={600}>
          Exclusive early access promo
        </Text>
        <Spacer height={4} />
        <Text color="#535353" family="Prompt">
          รับสิทธิพิเศษ สำหรับผู้ใช้งานกลุ่มแรก
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
        <GetStartedBanner />
        {renderDescription()}
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
