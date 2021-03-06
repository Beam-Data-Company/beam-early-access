import styles from './ChatPage.module.css'
import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import cookieProfile from '../../public/cookie-profile.png'
import cookiePic from '../../public/cookie-pic.png'
import arrowLeftIcon from '../../public/arrow-left-icon.png'
import cameraIcon from '../../public/camera-icon.png'
import plusCircleIcon from '../../public/plus-circle-icon.png'
import sendIcon from '../../public/send-icon.png'
import shoppingBag from '../../public/shopping-bag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animated, useSpring } from 'react-spring'
import {
  faWifi,
  faBatteryFull,
  faSignal,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  goToPaymentPage: () => void
}

export default function ChatPage(props: Props) {
  const beating = useSpring({
    loop: true,
    to: [
      { opacity: 1 },
      { opacity: 0 },
      { opacity: 1 },
      { opacity: 0 },
      { opacity: 1 },
    ],
    from: { opacity: 1 },
    config: { tension: 200 },
    delay: 1200,
  })

  return (
    <div className={styles.container}>
      <div className={styles.status_bar}>
        <span>9.41</span>
        <div className={styles.wrapper}>
          <FontAwesomeIcon width="16px" icon={faSignal} />
          <FontAwesomeIcon width="16px" icon={faWifi} />
          <FontAwesomeIcon width="16px" icon={faBatteryFull} />
        </div>
      </div>

      <div className={styles.chat_header}>
        <div className={styles.wrapper}>
          <Image
            src={arrowLeftIcon}
            alt="Arrow Left Icon"
            width="20px"
            height="22px"
            priority
          />
          <div className={styles.chat_title}>
            <div className={styles.chat_name}>Jenny&rsquo;s Cookie Shop</div>
            <div className={styles.chat_status}>Active Now</div>
          </div>
        </div>
        <FontAwesomeIcon width="20px" icon={faEllipsisH} />
      </div>

      <div className={styles.message_container}>
        <div className={classNames(styles.message_row, styles.row_align_right)}>
          <div className={styles.message_time}>9:41</div>
          <div
            className={classNames(styles.message_box, styles.box_first_right)}
          >
            Can I order a box of your
            <br />
            Signature Cookies please?
          </div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_right)}>
          <div className={styles.message_time}>9:41</div>
          <div className={classNames(styles.message_box, styles.box_picture)}>
            <Image
              src={cookiePic}
              alt="Cookie Pic"
              width="142px"
              height="127px"
              priority
            />
          </div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_left)}>
          <div className={styles.cookie_profile}>
            <Image src={cookieProfile} alt="Cookie Profile" priority />
          </div>
          <div
            className={classNames(styles.message_box, styles.box_first_left)}
          >
            Good choice! That will be $12,
            <br />
            One-Click Checkout here!
          </div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_left)}>
          <div
            className={classNames(styles.message_box, styles.link_message)}
            onClick={props.goToPaymentPage}
          >
            beampay.me/checkout=Jcs10e9
          </div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_left)}>
          <div
            className={classNames(styles.message_box, styles.box_shopping_bag)}
            onClick={props.goToPaymentPage}
          >
            <div className={styles.shopping_bag_background}>
              <animated.div style={beating}>
                <Image
                  src={shoppingBag}
                  alt="Shopping Bag"
                  width="74px"
                  height="88px"
                  priority
                />
              </animated.div>
            </div>
            <div className={styles.shopping_bag_title}>One-Click Checkout</div>
            <div className={styles.shopping_bag_id}>Order ID# 923812397</div>
          </div>
          <div className={styles.message_time}>9:41</div>
        </div>
      </div>

      <div className={styles.chat_footer}>
        <Image
          src={plusCircleIcon}
          alt="Plus Circle Icon"
          width="24px"
          height="24px"
        />
        <Image src={cameraIcon} alt="Camera Icon" width="25px" height="20px" />
        <div className={styles.text_input}>Text Message...</div>
        <Image
          src={sendIcon}
          alt="Arrow Left Icon"
          width="24px"
          height="22px"
        />
      </div>
    </div>
  )
}
