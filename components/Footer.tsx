import styles from './Footer.module.css'
import beamLogo from '../public/footer/beam-logo.png'
import beamLogoWhite from '../public/footer/beam-logo-white.png'
// import appStoreButton from '../public/footer/app-store-button.png'
// import googlePlayButton from '../public/footer/google-play-button.png'
import ImageBox from './ImageBox'
import Text from './Text'
import Spacer from './Spacer'
import facebookIcon from '../public/footer/facebook-icon.png'
import instagramIcon from '../public/footer/instagram-icon.png'
import linkedinIcon from '../public/footer/linkedin-icon.png'
import twitterIcon from '../public/footer/twitter-icon.png'
import facebookIconWhite from '../public/footer/facebook-icon-white.png'
import instagramIconWhite from '../public/footer/instagram-icon-white.png'
import linkedinIconWhite from '../public/footer/linkedin-icon-white.png'
import twitterIconWhite from '../public/footer/twitter-icon-white.png'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'
import Link from 'next/link'

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

type Props = {
  variant: 'white' | 'black'
}

export default function Footer(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })
  const isBlackVariant = props.variant === 'black'

  const renderChild = (pages: string[]) =>
    pages.map((page) => {
      return (
        <div key={page}>
          <Spacer height={12} />
          <Text size={14}>{page}</Text>
        </div>
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
    <footer
      className={classNames(
        styles.container,
        isBlackVariant ? styles.black_variant : styles.white_variant
      )}
    >
      <div className={styles.top_section}>
        <div className={styles.logo_download}>
          <ImageBox
            src={isBlackVariant ? beamLogo : beamLogoWhite}
            width={92}
            alt="Beam Logo"
          />
          <Spacer height={isPhonePortrait ? 16 : 28} />
          {/* <div className={styles.download_button_wrapper}>
            <Link href="https://apps.apple.com/th/app/beam-personal-data-locker/id1514539564" passHref>
              <ImageBox src={appStoreButton} width={155} alt="App Store" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=co.beamdata.beam.app.android" passHref>
              <ImageBox src={googlePlayButton} width={155} alt="Google Play" />
            </Link>
          </div> */}
        </div>

        {/* hide footer info for now */}
        {/* {renderFooterInfo()} */}

        <div className={styles.footer_info_wrapper}>
          <Text size={18} weight={600}>
            Contact
          </Text>
          <Spacer height={14} />
          <Text size={14} weight={600} lineHeight={28}>
            02-253-9389
            <br />
            info@beamcheckout.com
          </Text>
          <Spacer height={22} />
          <Text size={18} weight={600}>
            Follow Us
          </Text>
          <Spacer height={18} />
          <div className={styles.icon_wrapper_row}>
            <Link href="https://www.facebook.com/beamcheckout" passHref>
              <a>
                <ImageBox
                  src={isBlackVariant ? facebookIcon : facebookIconWhite}
                  width={24}
                  alt="Facebook Icon"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/beamcheckout/" passHref>
              <a>
                <ImageBox
                  src={isBlackVariant ? instagramIcon : instagramIconWhite}
                  width={24}
                  alt="Instagram Icon"
                />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/company/beamcheckout/?originalSubdomain=th"
              passHref
            >
              <a>
                <ImageBox
                  src={isBlackVariant ? linkedinIcon : linkedinIconWhite}
                  width={24}
                  alt="Linkedin Icon"
                />
              </a>
            </Link>
            <Link href="https://twitter.com/beamcheckout" passHref>
              <a>
                <ImageBox
                  src={isBlackVariant ? twitterIcon : twitterIconWhite}
                  width={27}
                  alt="Twitter Icon"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Spacer height={isPhonePortrait ? 14 : 24} />
      <div className={styles.bottom_section}>
        <Text size={isPhonePortrait ? 10 : 12} lineHeight={14}>
          © Beam Data Pte., Ltd. 2022. {isPhonePortrait && <br />}All rights
          reserved.
        </Text>
      </div>
      <Spacer height={48} />
    </footer>
  )
}
