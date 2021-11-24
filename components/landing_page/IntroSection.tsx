import styles from './IntroSection.module.css'
import Text from '../Text'
import Image from 'next/image'
import IntroPicture from '../../public/landing_page/intro-picture.png'
import CommentIcon from '../../public/landing_page/comment-icon.png'
import MobileIcon from '../../public/landing_page/mobile-icon.png'
import LaptopIcon from '../../public/landing_page/laptop-icon.png'
import classNames from 'classnames'

export default function Intro() {
  return (
    <div className={styles.container}>
      <Text size={32} color="#ffffff">
        Beam Instant Checkout
      </Text>
      <div className={styles.description}>
        <Text size={16} color="#ffffff" family="Assistant">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </Text>
      </div>

      <div className={styles.image}>
        <Image src={IntroPicture} alt="Intro Picture" priority />
      </div>

      <div className={styles.image_description}>
        <div
          className={classNames(
            styles.icon_text_wrapper,
            styles.social_commerce
          )}
        >
          <Image
            src={CommentIcon}
            width={15}
            height={14}
            alt="Comment Icon"
            priority
          />
          <Text size={20} color="#ffffff">
            Social Commerce
          </Text>
        </div>
        <div
          className={classNames(
            styles.icon_text_wrapper,
            styles.mobile_responsive
          )}
        >
          <Image
            src={MobileIcon}
            width={9}
            height={14}
            alt="Mobile Icon"
            priority
          />
          <Text size={20} color="#ffffff">
            Mobile Responsive
          </Text>
        </div>
        <div
          className={classNames(
            styles.icon_text_wrapper,
            styles.desktop_ecommerce
          )}
        >
          <Image
            src={LaptopIcon}
            width={17}
            height={14}
            alt="Laptop Icon"
            priority
          />
          <Text size={20} color="#ffffff">
            Desktop E-commerce
          </Text>
        </div>
      </div>
    </div>
  )
}
