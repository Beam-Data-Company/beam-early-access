import styles from './IntroSection.module.css'
import Text from '../Text'
import Image from 'next/image'
import CommentIcon from '../../public/landing_page/comment-icon.png'
import MobileIcon from '../../public/landing_page/mobile-icon.png'
import LaptopIcon from '../../public/landing_page/laptop-icon.png'
import SocialCommercePicture from '../../public/landing_page/social-commerce-picture.png'
import MobileEcommercePicture from '../../public/landing_page/mobile-ecommerce-picture.png'
import DesktopEcommercePicture from '../../public/landing_page/desktop-ecommerce-picture.png'
import ReceiptPictureOne from '../../public/landing_page/receipt-picture-1.png'
import ReceiptPictureTwo from '../../public/landing_page/receipt-picture-2.png'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'

export default function IntroSection() {
  const isPhone = useMediaQuery({ maxWidth: 600 })

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text
          size={isPhone ? 26 : 32}
          color="#ffffff"
          lineHeight={isPhone ? 38 : 45}
        >
          Shoppers go frictionless,
          <br />
          Stores grow sales
        </Text>
      </div>
      <div className={styles.description}>
        <Text size={18} color="#ffffff" family="Assistant" lineHeight={26}>
          Beam One-Click Checkout, built for modern day e-&nbsp;commerce in
          Southeast Asia, do it all in just a click.
        </Text>
      </div>

      <div className={styles.image_container}>
        <div className={styles.image_description_wrapper_first}>
          <div className={styles.image}>
            <Image
              src={SocialCommercePicture}
              alt="Social Commerce Picture"
              priority
            />
          </div>

          <div className={styles.icon_text_wrapper}>
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

            <div className={styles.receipt_bottom}>
              <Image
                src={ReceiptPictureOne}
                alt="Receipt Picture Two"
                priority
              />
            </div>
            <div className={styles.receipt_top}>
              <Image
                src={ReceiptPictureTwo}
                alt="Receipt Picture One"
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.image_description_wrapper}>
          <div className={styles.image}>
            <Image
              src={MobileEcommercePicture}
              alt="Mobile E-Commerce Picture"
              priority
            />
          </div>

          <div className={styles.icon_text_wrapper}>
            <Image
              src={MobileIcon}
              width={10}
              height={14}
              alt="Mobile Icon"
              priority
            />
            <Text size={20} color="#ffffff">
              Mobile E-Commerce
            </Text>
          </div>
        </div>

        <div
          className={classNames(
            styles.image_description_wrapper,
            styles.desktop_wrapper
          )}
        >
          <div className={styles.image_desktop}>
            <Image
              src={DesktopEcommercePicture}
              alt="Desktop E-Commerce Picture"
              priority
            />
          </div>

          <div className={styles.icon_text_wrapper}>
            <Image
              src={LaptopIcon}
              width={17}
              height={14}
              alt="Laptop Icon"
              priority
            />
            <Text size={20} color="#ffffff">
              Desktop E-Commerce
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
