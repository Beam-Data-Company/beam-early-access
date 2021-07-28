import styles from './ReceiptPage.module.css'
import React from 'react'
import Image from 'next/image'
import appIcon from '../../public/app-icon.png'
import confetti from '../../public/confetti.png'
import checkIcon from '../../public/check-icon.png'

type Props = {
  onClick: () => void
}

export default function ReceiptPage(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.confetti_pic}>
        <Image src={confetti} alt="Confetti" priority />
      </div>

      <div className={styles.modal_box}>
        <span className={styles.modal_title}>Checkout Beamed!</span>

        <div className={styles.icon_wrapper}>
          <div className={styles.app_icon}>
            <Image src={appIcon} alt="App Icon" priority />
          </div>
          <div className={styles.check_icon}>
            <Image src={checkIcon} alt="Check Icon" priority />
          </div>
        </div>

        <span className={styles.time_and_id}>
          14 Jul 2021, 15:00
          <br />
          Bill# 923812397
        </span>

        <div className={styles.info_container}>
          <div className={styles.info_child}>
            <span className={styles.child_key}>Merchant</span>
            <span>XYZ Furniture</span>
          </div>
          <div className={styles.info_child}>
            <span className={styles.child_key}>Payment</span>
            <span>HSBC*1234</span>
          </div>
          <div className={styles.info_child}>
            <span className={styles.child_key}>Amount</span>
            <span>8,400 THB</span>
          </div>
        </div>
      </div>

      <span className={styles.description}>
        We have informed the merchant
        <br />
        that you have successfully paid
      </span>

      {/* <button className={styles.button} onClick={props.onClick}>
        Demo Again
      </button> */}
    </div>
  )
}
