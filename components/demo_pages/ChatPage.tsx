import styles from './ChatPage.module.css'
import React from 'react'
import Image from 'next/image'
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
  onClick: () => void
}

export default function ChatPage(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.status_bar}>
        <div>9.41</div>
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
        <div className={styles.message_right}>
          <div className={styles.time}>12:00</div>
          <div className={styles.message_box_first_right}>
            Can I order a box of your
            <br />
            signature cookies please?
          </div>
        </div>
        <div className={styles.message_right}>
          <div className={styles.time}>12:00</div>
          <div className={styles.message_box}>cookie pic</div>
        </div>
        <div className={styles.message_left}>
          <div className={styles.cookie_profile}>
            <Image src={cookieProfile} alt="Cookie Profile" priority />
          </div>
          <div className={styles.message_box_first_left}>
            Yes sure! Please pay
            <br />
            through this chackout link
          </div>
        </div>
        <div className={styles.message_left}>
          <div className={styles.message_box}>beamdata.co/checkout=1220</div>
        </div>
        <div className={styles.message_left}>
          <div className={styles.message_box} onClick={props.onClick}>
            <div className={styles.shopping_bag}>shopping bag</div>
            Instant Checkout
            <br />
            Bill #923812397
          </div>
          <div className={styles.time}>12:03</div>
        </div>
      </div>

      <div className={styles.chat_footer}>
        <div>
          <FontAwesomeIcon width="24px" icon={faPlusCircle} />
        </div>
        <div>
          <FontAwesomeIcon width="24px" icon={faCamera} />
        </div>
        <div className={styles.text_input}>Text Message...</div>
        <div>
          <FontAwesomeIcon width="24px" icon={faPaperPlane} />
        </div>
      </div>
    </div>
  )
}
