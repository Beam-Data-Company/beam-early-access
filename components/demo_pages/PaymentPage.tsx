import styles from './PaymentPage.module.css'
import React from 'react'
import Image from 'next/image'
import cardIcon from '../../public/card-icon.png'
import arrowRightIcon from '../../public/arrow-right-icon.png'
import classNames from 'classnames'
import profilePic from '../../public/profile-pic.png'
import beamLogo from '../../public/beam-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

type Props = {
  goToReceiptPage: () => void
}

export default function PaymentPage(props: Props) {
  const [buttonStatic, setButtonStatic] = useState(true)

  const startSlide = () => {
    setButtonStatic((buttonStatic) => !buttonStatic)
    setTimeout(() => props.goToReceiptPage(), 2000)
  }

  const slideRight = useSpring({
    opacity: 1,
    transform: 'translate(72%, 0%)',
    from: { opacity: 1, transform: 'translate(0%, 0%)' },
    config: { tension: 90 },
    delay: 2300,
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Image
            src={profilePic}
            alt="Profile Pic"
            width="27px"
            height="27px"
          />
          <span>You&apos;re logged in as Jacky Jones</span>
        </div>
        <div className={classNames(styles.wrapper, styles.wrapper_blue)}>
          <span>Switch</span>
          <FontAwesomeIcon width="8px" icon={faChevronRight} />
        </div>
      </div>

      <div className={styles.id_and_ref}>
        <span>Order ID# 923812397</span>
        <span>Ref: E-Commerce</span>
      </div>

      <div className={styles.section}>
        <div className={styles.section_header}>
          <span>Customer Detail</span>
          <FontAwesomeIcon width="14px" color="#c9c9c9" icon={faPen} />
        </div>

        <div className={styles.info_box}>
          <div className={styles.info_box_name}>Contact</div>
          <div>
            Jacky Jones
            <br />
            Jacky@beamcheckout.com
            <br />
            +65 6656 4656
          </div>
        </div>
        <div className={styles.info_box}>
          <div className={styles.info_box_name}>Home</div>
          <div>
            1000 Bayfront Ave.
            <br />
            Singapore, 018956
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.section_header}>
          <span>Payment</span>
          <FontAwesomeIcon width="14px" color="#c9c9c9" icon={faPen} />
        </div>

        <div className={styles.info_box_payment}>
          <div className={styles.wrapper}>
            <div className={styles.card_icon}>
              <Image
                src={cardIcon}
                alt="Card Icon"
                placeholder="blur"
                priority
              />
            </div>
            <span>Credit/Debit</span>
          </div>
          <span>HSBC*1234</span>
        </div>
      </div>

      <div className={styles.row_bottom}>
        <div className={styles.wrapper}>
          <span>Total</span>
          <span className={styles.vat_text}>(%7 Vat Included)</span>
        </div>
        <span>$12</span>
      </div>

      <div className={styles.slide_rail}>
        {buttonStatic ? (
          <div className={styles.button_white_container}>
            <button className={styles.button_white} onClick={startSlide}>
              <Image
                src={beamLogo}
                alt="Beam Logo"
                width="13px"
                height="17px"
                priority
              />
            </button>
          </div>
        ) : (
          <animated.div
            style={slideRight}
            className={styles.button_white_container}
          >
            <button className={styles.button_white}>
              <Image
                src={beamLogo}
                alt="Beam Logo"
                width="13px"
                height="17px"
                priority
              />
            </button>
          </animated.div>
        )}

        <div className={styles.wrapper}>
          SLIDE TO PAY
          <Image
            src={arrowRightIcon}
            alt="Arrow Right Icon"
            width="14px"
            height="16px"
          />
        </div>
      </div>
    </div>
  )
}
