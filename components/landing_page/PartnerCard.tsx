import styles from './PartnerCard.module.css'
import Text from '../Text'
import Spacer from '../Spacer'
import NaraLogo from '../../public/landing_page/nara-logo.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  percentage: number
  title: string
  description: string
  logo?: StaticImageData
  name: string
  companyName: string
  industry: string
}

export default function PartnerCard(props: Props) {
  return (
    <div className={styles.container}>
      <Text size={24} color="#00d379">{`${props.percentage}% `}</Text>
      <Text size={24}>{props.title}</Text>
      <Spacer height={25} />
      <Text color="#383838" family="Assistant">
        <div className={styles.description}>{props.description}</div>
      </Text>

      <Spacer height={35} />

      <div className={styles.bottom_section}>
        <div className={styles.logo_text_wrapper}>
          <Image src={NaraLogo} alt="Logo" width={39} height={50} priority />
          <div className={styles.name_company_wrapper}>
            <Text color="#383838" family="Assistant" weight={600}>
              {props.name} <br />
              {props.companyName}
            </Text>
          </div>
        </div>
        <Text size={13} color="#2c46b5" family="Assistant" weight={600}>
          <Link href="#" passHref>
            {`Read ${props.industry} case studies`}
          </Link>
        </Text>
      </div>
    </div>
  )
}
