import styles from './NewsletterCard.module.css'
import Text from '../Text'
import Spacer from '../Spacer'

export default function ArticleCard() {
  return (
    <div className={styles.container}>
      <Text size={22}>Get Beam Newsletter</Text>
      <Spacer height={20} />
      <Text size={14} family="Assistant">
        A 2-minute monthly digital paper for news, <br />
        exclusive benefits and early access
      </Text>
      <Spacer height={20} />
    </div>
  )
}
