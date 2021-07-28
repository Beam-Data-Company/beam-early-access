import styles from './ChatPage.module.css'
import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import cookieProfile from '../../public/cookie-profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faWifi,
  faBatteryFull,
  faSignal,
  faEllipsisH,
  faPlusCircle,
  faCamera,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  buttonHandleClick: () => void
}

export default function ChatPage(props: Props) {
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
          <FontAwesomeIcon width="20px" icon={faArrowLeft} />
          <div className={styles.chat_title}>
            <div className={styles.chat_name}>Jenny&rsquo;s Cookies</div>
            <div className={styles.chat_status}>Active Now</div>
          </div>
        </div>
        <FontAwesomeIcon width="20px" icon={faEllipsisH} />
      </div>

      <div className={styles.message_container}>
        <div className={classNames(styles.message_row, styles.row_align_right)}>
          <div className={styles.message_time}>12:00</div>
          <div
            className={classNames(styles.message_box, styles.box_first_right)}
          >
            Can I order a box of your
            <br />
            signature cookies please?
          </div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_right)}>
          <div className={styles.message_time}>12:00</div>
          <div className={styles.message_box}>cookie pic</div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_left)}>
          <div className={styles.cookie_profile}>
            <Image src={cookieProfile} alt="Cookie Profile" priority />
          </div>
          <div
            className={classNames(styles.message_box, styles.box_first_left)}
          >
            Yes sure! Please pay
            <br />
            through this chackout link
          </div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_left)}>
          <div className={styles.message_box}>beamdata.co/checkout=1220</div>
        </div>
        <div className={classNames(styles.message_row, styles.row_align_left)}>
          <div className={styles.message_box} onClick={props.buttonHandleClick}>
            <div className={styles.shopping_bag}>shopping bag</div>
            Instant Checkout
            <br />
            Bill #923812397
          </div>
          <div className={styles.message_time}>12:03</div>
        </div>
      </div>

      <div className={styles.chat_footer}>
        <FontAwesomeIcon width="24px" icon={faPlusCircle} />
        <FontAwesomeIcon width="24px" icon={faCamera} />
        <div className={styles.text_input}>Text Message...</div>
        <FontAwesomeIcon width="24px" icon={faPaperPlane} />
      </div>
    </div>
  )
}
