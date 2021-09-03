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
import { useMediaQuery } from 'react-responsive'

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
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

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
        <div key={title} className={styles.footer_info_wrapper}>
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
          <ImageBox
            src={beamLogo}
            width={isPhonePortrait ? 74 : 92}
            alt="Beam Logo"
          />
          <Spacer height={28} heightPhoneResponsive={16} />
          <div className={styles.download_button_wrapper}>
            <ImageBox src={appStoreButton} width={155} alt="App Store" />
            <ImageBox src={googlePlayButton} width={155} alt="Google Play" />
          </div>
        </div>

        {renderFooterInfo()}

        <div className={styles.footer_info_wrapper}>
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

      <Spacer height={24} heightPhoneResponsive={14} />
      <div className={styles.bottom_section}>
        <Text size={12} sizePhoneResponsive={10} lineHeight={14}>
          © Beam Data Company Limited 2020. {isPhonePortrait && <br />}All
          rights reserved.
        </Text>
      </div>
      <Spacer height={48} />
    </footer>
  )
}
