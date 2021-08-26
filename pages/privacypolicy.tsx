import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer'
import styles from '../styles/privacypolicy.module.css'
import lockImage from '../public/lock-image.png'
import Spacer from '../components/Spacer'

const bannerImageArray = [
  {
    src: lockImage,
    width: 113,
    alt: 'Lock Image',
  },
  {
    src: lockImage,
    width: 113,
    alt: 'Lock Image',
  },
  {
    src: lockImage,
    width: 113,
    alt: 'Lock Image',
  },
]

export default function PrivacyPolicy() {
  return (
    <div className={styles.main_container}>
      <PageBanner title="Privacy by Design" imageArray={bannerImageArray} />
      <div className={styles.content_wrapper}>
        {/* to temporarily seperate the banner and footer */}
        <Spacer height={100} />
      </div>
      <Footer />
    </div>
  )
}
