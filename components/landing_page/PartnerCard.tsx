import styles from './PartnerCard.module.css'
import Text from '../Text'
import NaraLogo from '../../public/landing_page/nara-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

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
  const isIpadPortraitAndPhone = useMediaQuery({ maxWidth: 1040 })
  const isPhone = useMediaQuery({ maxWidth: 600 })

  const isIpadPortraitOnly = isIpadPortraitAndPhone && !isPhone
  return (
    <div className={styles.container}>
      <Text
        size={isIpadPortraitOnly ? 22 : 24}
        color="#00d379"
      >{`${props.percentage}% `}</Text>
      <Text size={isIpadPortraitOnly ? 22 : 24}>{props.title}</Text>

      <Text color="#383838" family="Assistant">
        <div className={styles.description}>{props.description}</div>
      </Text>

      <div className={styles.bottom_section}>
        <div className={styles.logo_text_wrapper}>
          <Image
            src={NaraLogo}
            alt="Logo"
            width={isIpadPortraitAndPhone ? 32 : 39}
            height={isIpadPortraitAndPhone ? 41 : 50}
            priority
          />
          <div className={styles.name_company_wrapper}>
            <Text
              color="#383838"
              family="Assistant"
              weight={600}
              size={isIpadPortraitOnly ? 14 : 16}
            >
              {props.name} <br />
              {props.companyName}
            </Text>
          </div>
        </div>
        <Text
          size={isIpadPortraitOnly ? 11 : 13}
          color="#2c46b5"
          family="Assistant"
          weight={600}
        >
          <Link href="#" passHref>
            {isPhone ? 'Read' : `Read ${props.industry} case studies`}
          </Link>
        </Text>
      </div>
    </div>
  )
}
