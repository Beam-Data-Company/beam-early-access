import styles from './PartnerLogoCarousel.module.css'
import Text from '../Text'
import ImageBox from '../ImageBox'
import { useMediaQuery } from 'react-responsive'

import NaraLogoWhite from '../../public/landing_page/partner_logo/nara-logo-white.png'
import ChanintrLogo from '../../public/landing_page/partner_logo/chanintr-logo.png'
import ChloeLogo from '../../public/landing_page/partner_logo/chloe-logo.png'
import DisayaLogo from '../../public/landing_page/partner_logo/disaya-logo.png'
import HermanMillerLogo from '../../public/landing_page/partner_logo/herman-miller-logo.png'
import HondaLogo from '../../public/landing_page/partner_logo/honda-logo.png'
import JimmyChooLogo from '../../public/landing_page/partner_logo/jimmy-choo-logo.png'
import LeicaLogo from '../../public/landing_page/partner_logo/leica-logo.png'
import MatterMakersLogo from '../../public/landing_page/partner_logo/matter-makers-logo.png'
import MercedesBenzLogo from '../../public/landing_page/partner_logo/mercedes-benz-logo.png'
import PergoLogo from '../../public/landing_page/partner_logo/pergo-logo.png'
import RavipaLogo from '../../public/landing_page/partner_logo/ravipa-logo.png'
import SansiriLogo from '../../public/landing_page/partner_logo/sansiri-logo.png'
import ThaiSmileLogo from '../../public/landing_page/partner_logo/thai-smile-logo.png'
import ToochLogo from '../../public/landing_page/partner_logo/tooch-logo.png'
import ToyotaLogo from '../../public/landing_page/partner_logo/toyota-logo.png'
import ValentinoLogo from '../../public/landing_page/partner_logo/valentino-logo.png'

export default function PartnerLogoCarousel() {
  const isPhone = useMediaQuery({ maxWidth: 600 })

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text color="#ffffff" lineHeight={38}>
          A trusted payments {isPhone && <br />}provider
        </Text>
      </div>

      <div className={styles.slider_track}>
        <ImageBox src={NaraLogoWhite} alt="Nara Logo White" width={150} />
        <ImageBox src={ChanintrLogo} alt="Chanintr Logo" width={160} />
        <ImageBox src={ChloeLogo} alt="Chloe Logo" width={120} />
        <ImageBox src={DisayaLogo} alt="Disaya Logo" width={150} />
        <ImageBox src={HermanMillerLogo} alt="Herman Miller Logo" width={200} />
        <ImageBox src={HondaLogo} alt="Honda Logo" width={100} />
        <ImageBox src={JimmyChooLogo} alt="Jimmy Choo Logo" width={200} />
        <ImageBox src={LeicaLogo} alt="Leica Logo" width={120} />
        <ImageBox src={MatterMakersLogo} alt="Matter Makers Logo" width={200} />
        <ImageBox src={MercedesBenzLogo} alt="Mercedes Benz Logo" width={200} />
        <ImageBox src={PergoLogo} alt="Pergo Logo" width={120} />
        <ImageBox src={RavipaLogo} alt="Ravipa Logo" width={150} />
        <ImageBox src={SansiriLogo} alt="Sansiri Logo" width={120} />
        <ImageBox src={ThaiSmileLogo} alt="Thai Smile Logo" width={100} />
        <ImageBox src={ToochLogo} alt="Tooch Logo" width={140} />
        <ImageBox src={ToyotaLogo} alt="Toyota Logo" width={100} />
        <ImageBox src={ValentinoLogo} alt="Valentino Logo" width={180} />

        <ImageBox src={NaraLogoWhite} alt="Nara Logo White" width={150} />
        <ImageBox src={ChanintrLogo} alt="Chanintr Logo" width={160} />
        <ImageBox src={ChloeLogo} alt="Chloe Logo" width={120} />
        <ImageBox src={DisayaLogo} alt="Disaya Logo" width={150} />
        <ImageBox src={HermanMillerLogo} alt="Herman Miller Logo" width={200} />
        <ImageBox src={HondaLogo} alt="Honda Logo" width={100} />
        <ImageBox src={JimmyChooLogo} alt="Jimmy Choo Logo" width={200} />
        <ImageBox src={LeicaLogo} alt="Leica Logo" width={120} />
        <ImageBox src={MatterMakersLogo} alt="Matter Makers Logo" width={200} />
        <ImageBox src={MercedesBenzLogo} alt="Mercedes Benz Logo" width={200} />
        <ImageBox src={PergoLogo} alt="Pergo Logo" width={120} />
        <ImageBox src={RavipaLogo} alt="Ravipa Logo" width={150} />
        <ImageBox src={SansiriLogo} alt="Sansiri Logo" width={120} />
        <ImageBox src={ThaiSmileLogo} alt="Thai Smile Logo" width={100} />
        <ImageBox src={ToochLogo} alt="Tooch Logo" width={140} />
        <ImageBox src={ToyotaLogo} alt="Toyota Logo" width={100} />
        <ImageBox src={ValentinoLogo} alt="Valentino Logo" width={180} />
      </div>
    </div>
  )
}
