import styles from './CardBottomSection.module.css'
import NewsletterCard from './NewsletterCard'
import ArticleCard from './ArticleCard'
import BangkokPostPicture from '../../public/landing_page/bangkok-post-picture.png'
import ForbesPicture from '../../public/landing_page/forbes-picture.png'
import Link from 'next/link'
import Spacer from '../Spacer'

export default function CardBottomSection() {
  return (
    <div className={styles.container}>
      <div className={styles.card_wrapper}>
        <NewsletterCard />

        <Link
          href="https://www.bangkokpost.com/thailand/pr/2177931/beam-pioneers-of-one-click-checkouts-for-southeast-asia"
          passHref
        >
          <a>
            <ArticleCard
              title="Bangkok Post"
              description="Checkouts are changing. In the midst of this pandemic, restrictions have brought us online for our"
              image={BangkokPostPicture}
              alt="Bangkok Post Picture"
            />
          </a>
        </Link>

        <Link
          href="https://forbesthailand.com/sponsored-content/beam.html"
          replace
          passHref
        >
          <a>
            <ArticleCard
              title="Forbes"
              description="วิธีการเช็กเอาท์ หรือการชำระเงินออนไลน์นั้นกำลังเปลี่ยนไป ท่ามกลางจุดเปลี่ยนที่สำคัญของโรคระบาดโควิด-19 นั้น เกิดการล็อกดาวน์"
              image={ForbesPicture}
              alt="Forbes Picture"
              isThai
            />
          </a>
        </Link>
      </div>
      <Spacer height={45} />

      {/* temporarily removing this link */}
      {/* <Text size={18} color="#ffffff" family="Assistant">
        <u>
          <Link href="#" passHref>
            Read all articles
          </Link>
        </u>
      </Text> */}
    </div>
  )
}
