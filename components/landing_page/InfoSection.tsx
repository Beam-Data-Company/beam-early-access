import styles from './InfoSection.module.css'
import OneClickPicture from '../../public/landing_page/one-click-picture.png'
import PaymentPicture from '../../public/landing_page/payment-picture.png'
import NoCodingPicture from '../../public/landing_page/no-coding-picture.png'
import triangleIcon from '../../public/earlybird/triangle-icon.png'
import squareIcon from '../../public/earlybird/square-icon.png'
import circleIcon from '../../public/earlybird/circle-icon.png'
import Image from 'next/image'
import Text from '../Text'
import { useMediaQuery } from 'react-responsive'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

type InfoType = {
  icon: StaticImageData
  message: string
}

const OneClickInfoArray = [
  {
    icon: triangleIcon,
    message: 'Works on any social messaging app and e-\u2060commerce website',
  },
  {
    icon: squareIcon,
    message:
      'Proven to help you grow your e-\u2060commerce business with 30% higher sales conversions',
  },
]

const PaymentInfoArray = [
  {
    icon: triangleIcon,
    message:
      'We connect to a range of payment methods, so that you don’t have to:\n \nCredit & Debit Cards - E-\u2060wallets - Mobile banking - Crypto - Buy now, pay later - and many more',
  },
  {
    icon: squareIcon,
    message: 'Low fees per transaction and no hidden fees',
  },
]

const NoCodingInfoArray = [
  {
    icon: triangleIcon,
    message: 'No integration required, get started in minutes',
  },
  {
    icon: circleIcon,
    message: 'E-commerce website plug-ins available',
  },
  {
    icon: squareIcon,
    message:
      'Stick to your business-as-usual processes,\nlet us do the hard work',
  },
]

const renderInfo = (array: InfoType[]) =>
  array.map(({ icon, message }) => {
    return (
      <li className={styles.list_child} key={message}>
        <div className={styles.icon_container}>
          <Image src={icon} alt="Icon" width={20} height={20} priority />
        </div>
        <Text color="#ffffff" family="Assistant" size={18}>
          {message}
        </Text>
      </li>
    )
  })

export default function InfoSection() {
  const isIpadPortraitAndPhone = useMediaQuery({ maxWidth: 1040 })
  const isPhone = useMediaQuery({ maxWidth: 600 })

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  //first picture in
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('#first-picture'),
      {
        opacity: 0,
        transform: 'scale(0.5)',
      },
      {
        opacity: 1,
        transform: 'scale(1)',
        scrollTrigger: {
          trigger: element.querySelector('#first-wrapper'),
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
      }
    )
  }, [])

  //first picture out
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('#first-picture'),
      {
        opacity: 1,
        transform: 'scale(1)',
      },
      {
        opacity: 0,
        transform: 'scale(0)',
        scrollTrigger: {
          trigger: element.querySelector('#second-wrapper'),
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
      }
    )
  }, [])

  //second picture out
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('#second-picture'),
      {
        opacity: 1,
        transform: 'scale(1)',
      },
      {
        opacity: 0,
        transform: 'scale(0)',
        scrollTrigger: {
          trigger: element.querySelector('#third-wrapper'),
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
      }
    )
  }, [])

  //second picture in
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('#second-picture'),
      {
        opacity: 0,
        transform: 'scale(0.5)',
      },
      {
        opacity: 1,
        transform: 'scale(1)',
        scrollTrigger: {
          trigger: element.querySelector('#second-wrapper'),
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    )
  }, [])

  //third picture in
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('#third-picture'),
      {
        opacity: 0,
        transform: 'scale(0.5)',
      },
      {
        opacity: 1,
        transform: 'scale(1)',
        scrollTrigger: {
          trigger: element.querySelector('#third-wrapper'),
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.picture_container}>
        <div className={styles.sticky_container}>
          <div className={styles.image_box} id="first-picture">
            <Image src={OneClickPicture} alt="One Click Picture" priority />
          </div>

          <div className={styles.image_box} id="second-picture">
            <Image src={PaymentPicture} alt="Payment Picture" priority />
          </div>

          <div className={styles.image_box} id="third-picture">
            <Image src={NoCodingPicture} alt="No Coding Picture" priority />
          </div>
        </div>
      </div>

      <div className={styles.info_container}>
        <div className={styles.wrapper} id="first-wrapper">
          {isIpadPortraitAndPhone && (
            <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
              The One-Click Experience {isPhone && <br />}on your Sales Channel
            </Text>
          )}
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                The One-Click Experience
                <br />
                on your Sales Channel
              </Text>
            )}
            <ul className={styles.info_list}>
              {renderInfo(OneClickInfoArray)}
            </ul>
          </div>
        </div>

        <div className={styles.wrapper} id="second-wrapper">
          {isIpadPortraitAndPhone && (
            <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
              Offer all the Payment Methods
              <br />
              your Customers Love
            </Text>
          )}
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                Offer all the Payment Methods
                <br />
                your Customers Love
              </Text>
            )}
            <ul className={styles.info_list}>{renderInfo(PaymentInfoArray)}</ul>
          </div>
        </div>

        <div className={styles.wrapper} id="third-wrapper">
          {isIpadPortraitAndPhone && (
            <Text color="#ffffff" size={isPhone ? 26 : 28} lineHeight={38}>
              Just Plug &#38; Play,{isPhone && <br />} No Coding Needed
            </Text>
          )}
          <div className={styles.message_container}>
            {!isIpadPortraitAndPhone && (
              <Text color="#ffffff" size={32}>
                Just Plug &#38; Play,
                <br />
                No Coding Needed
              </Text>
            )}
            <ul className={styles.info_list}>
              {renderInfo(NoCodingInfoArray)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
