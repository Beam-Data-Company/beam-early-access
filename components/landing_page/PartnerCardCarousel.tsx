import styles from './PartnerCardCarousel.module.css'
import PartnerCard from './PartnerCard'
import Text from '../Text'
import Spacer from '../Spacer'
import Button from '../Button'
import { useMediaQuery } from 'react-responsive'

export default function PartnerCardCarousel() {
  const isIpadPortraitAndPhone = useMediaQuery({ maxWidth: 1040 })
  const isPhone = useMediaQuery({ maxWidth: 600 })

  return (
    <div className={styles.container}>
      {isIpadPortraitAndPhone && (
        <div className={styles.title}>
          <Text color="#ffffff" lineHeight={38}>
            Why merchants{isPhone && <br />}enjoy Beam
          </Text>
        </div>
      )}
      {!isIpadPortraitAndPhone && (
        <div className={styles.title}>
          <Text color="#ffffff" lineHeight={38}>
            Why merchants enjoy Beam
          </Text>
        </div>
      )}

      <div className={styles.slider_track}>
        {/* render Partner Card 12 times 
            6 times plus extra 6 times for infinite carousel*/}
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jonessssssssssssssss"
          companyName="Nara Thai Cuisineeeeeeeee"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />

        {/* extra 6 times here */}
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
        <PartnerCard
          percentage={40}
          title="higher conversion rate in 1 month!"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
          name="Jenny Jones"
          companyName="Nara Thai Cuisine"
          industry="F&#38;B"
        />
      </div>

      <Spacer height={70} />

      <Button variant="contained">Be our partner</Button>
    </div>
  )
}
