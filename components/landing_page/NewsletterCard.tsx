import styles from './NewsletterCard.module.css'
import Text from '../Text'
import Spacer from '../Spacer'
import NewsletterSignupForm from '../NewsletterSignupForm'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

export default function ArticleCard() {
  const isPhone = useMediaQuery({ maxWidth: 600 })

  return (
    <div className={styles.container}>
      <Text size={22}>
        <FontAwesomeIcon width="18px" icon={faEnvelopeOpen} /> Get Beam
        Newsletter
      </Text>
      <Spacer height={isPhone ? 10 : 20} />
      <Text size={14} family="Assistant">
        A 2-minute monthly digital paper for news, <br />
        exclusive benefits and early access
      </Text>
      <Spacer height={isPhone ? 15 : 25} />
      <NewsletterSignupForm />
    </div>
  )
}
