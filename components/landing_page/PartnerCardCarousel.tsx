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
      <Text
        color="#ffffff"
        size={isPhone ? 26 : isIpadPortraitAndPhone ? 28 : 32}
        lineHeight={38}
      >
        What our strategic {isPhone && <br />}partners say
      </Text>

      <Spacer height={isPhone ? 35 : 60} />

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
      <div className={styles.button_wrapper}>
        <Button variant="outlined">View All Case Studies</Button>
        <Button variant="contained">Be our partner</Button>
      </div>
    </div>
  )
}
