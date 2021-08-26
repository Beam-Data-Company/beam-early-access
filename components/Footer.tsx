import styles from './Footer.module.css'
import beamLogo from '../public/footer/beam-logo.png'
import appStoreButton from '../public/footer/app-store-button.png'
import googlePlayButton from '../public/footer/google-play-button.png'
import ImageBox from './ImageBox'
import Text from './Text'
import Spacer from './Spacer'
import facebookIcon from '../public/footer/facebook-icon.png'
import instagramIcon from '../public/footer/instagram-icon.png'
import linkedinIcon from '../public/footer/linkedin-icon.png'
import twitterIcon from '../public/footer/twitter-icon.png'
// import globeIcon from '../public/footer/globe-icon.png'
// import angleDownIcon from '../public/footer/angle-down-icon.png'

const footerInfoArray = [
  {
    title: 'About',
    pages: ['Business', 'Individuals', 'Developers', 'About Us'],
  },
  {
    title: 'Resources',
    pages: ['News & Blogs', 'FAQs', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'Contact',
    pages: ['info@beamdata.co', 'contact@beamdata.co'],
  },
]

export default function Footer() {
  const renderChild = (pages: string[]) =>
    pages.map((page) => {
      return (
        <>
          <Spacer height={12} />
          <Text size={14}>{page}</Text>
        </>
      )
    })

  const renderFooterInfo = () =>
    footerInfoArray.map(({ title, pages }) => {
      return (
        <div key={title} style={{ width: '120px' }}>
          <Text size={18} weight={600}>
            {title}
          </Text>
          <Spacer height={8} />
          {renderChild(pages)}
        </div>
      )
    })

  return (
    <footer className={styles.container}>
      <div className={styles.top_section}>
        <div className={styles.logo_download}>
          <ImageBox src={beamLogo} width={92} alt="Beam Logo" />
          <Spacer height={28} />
          <div className={styles.download_wrapper_row}>
            <ImageBox src={appStoreButton} width={155} alt="App Store" />
            <ImageBox src={googlePlayButton} width={155} alt="Google Play" />
          </div>
        </div>

        {renderFooterInfo()}

        <div>
          <Text size={18} weight={600}>
            Follow Us
          </Text>
          <Spacer height={22} />
          <div className={styles.icon_wrapper_row}>
            <ImageBox src={facebookIcon} width={16} alt="Facebook Icon" />
            <ImageBox src={instagramIcon} width={16} alt="Instagram Icon" />
          </div>
          <Spacer height={22} />
          <div className={styles.icon_wrapper_row}>
            <ImageBox src={linkedinIcon} width={16} alt="Linkedin Icon" />
            <ImageBox src={twitterIcon} width={18} alt="Twitter Icon" />
          </div>
        </div>
      </div>

      <Spacer height={24} />
      <div className={styles.bottom_section}>
        <Text size={12}>
          © Beam Data Company Limited 2020. All rights reserved.
        </Text>
        {/* <div className={styles.language_wrapper_row}>
          <ImageBox src={globeIcon} width={15} alt="Globe Icon" />
          <Text size={14}>EN</Text>
          <ImageBox src={angleDownIcon} width={12} alt="Angle Down Icon" />
        </div> */}
      </div>
      <Spacer height={48} />
      
    </footer>
  )
}
