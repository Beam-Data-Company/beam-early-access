import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer'
import styles from '../styles/privacypolicy.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.main_container}>
      <PageBanner />
      <div className={styles.content_wrapper}></div>
      <Footer />
    </div>
  )
}
