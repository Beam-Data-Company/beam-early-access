import styles from './ContactSupportCard.module.css'
import Text from '../Text'
import { useMediaQuery } from 'react-responsive'

export default function ContactSupportCard() {
  const isLessThan1160 = useMediaQuery({ maxWidth: 1160 })
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Text
          color="#ffffff"
          family="Lexend Deca"
          size={isPhonePortrait ? 22 : 32}
        >
          Can’t find what you’re looking for?
        </Text>
        <br />
        <br />
        <Text color="#ffffff" size={isPhonePortrait ? 14 : 16}>
          Contact us if you need help with anything. Our support
          {!isLessThan1160 && <br />} team will get back to you as soon as
          possible
        </Text>
      </div>
      <button className={styles.button}>Contact Support</button>
    </div>
  )
}
