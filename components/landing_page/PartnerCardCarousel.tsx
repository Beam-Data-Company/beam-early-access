import styles from './PartnerCardCarousel.module.css'
import PartnerCard from './PartnerCard'
import Text from '../Text'
import Spacer from '../Spacer'
import classNames from 'classnames'

export default function PartnerSlider() {
  return (
    <div className={styles.container}>
      <Text color="#ffffff" size={32}>
        What our strategic partners say
      </Text>

      <Spacer height={60} />

      <div className={styles.slider_track}>
        {/* render Partner Card 12 times 
            6 times plus extra 6 times for infinite carousel*/}
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

      <button className={classNames(styles.button, styles.outlined)}>
        <Text family="Assistant" weight={600} size={18}>
          View All Case Studies
        </Text>
      </button>
      <button className={classNames(styles.button, styles.contained)}>
        <Text family="Assistant" weight={600} size={18}>
          Be our partner
        </Text>
      </button>
    </div>
  )
}
