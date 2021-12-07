import styles from './CardBottomSection.module.css'
import NewsletterCard from './NewsletterCard'
import ArticleCard from './ArticleCard'
import ArticlePictureOne from '../../public/landing_page/article-picture-1.png'
import ArticlePictureTwo from '../../public/landing_page/article-picture-2.png'
import Text from '../Text'
import Link from 'next/link'
import Spacer from '../Spacer'

export default function CardBottomSection() {
  return (
    <div className={styles.container}>
      <div className={styles.card_wrapper}>
        <NewsletterCard />
        <ArticleCard
          title="Article Name"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
          image={ArticlePictureOne}
          alt="Article Picture One"
        />
        <ArticleCard
          title="Article Name"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
          image={ArticlePictureTwo}
          alt="Article Picture Two"
        />
      </div>
      <Spacer height={45} />
      <Text size={18} color="#ffffff" family="Assistant">
        <u>
          <Link href="#" passHref>
            Read all articles
          </Link>
        </u>
      </Text>
    </div>
  )
}
