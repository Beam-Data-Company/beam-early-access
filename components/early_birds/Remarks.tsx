import Text from '../Text'
import Link from 'next/link'
import styles from './Remarks.module.css'

export default function Remarks() {
  return (
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
        . We reserved the rights to refuse providing offers and/or promotions at
        any time, either for particular individuals or organizations at our
        discretion, with a given notice.
      </Text>
    </div>
  )
}