import styles from './SideBar.module.css'
import Text from './Text'
import Spacer from './Spacer'

export default function SideBar() {
  return (
    <aside className={styles.container}>
      <Text size={18} weight={600}>
        Data Collected
      </Text>
      <Spacer height={20} />
      <Text size={14} lineHeight={32}>
        Online Payment
        <br />
        Instant Checkout
        <br />
        Social Commerce
      </Text>
      <Spacer height={40} />

      <Text size={18} weight={600}>
        Data Usage
      </Text>
      <Spacer height={20} />
      <Text size={14} lineHeight={32}>
        Membership Card
        <br />
        Rewards
      </Text>
      <Spacer height={40} />

      <Text size={18} weight={600}>
        Consent
      </Text>
      <Spacer height={20} />
      <Text size={14} lineHeight={32}>
        APIs
        <br />
        Form Creation
        <br />
        QR Links
      </Text>
    </aside>
  )
}
