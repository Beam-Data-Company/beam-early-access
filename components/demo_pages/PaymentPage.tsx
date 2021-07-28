import styles from './PaymentPage.module.css'
import React from 'react'
import Image from 'next/image'
import cardIcon from '../../public/card-icon.png'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  buttonHandleClick: () => void
}

export default function PaymentPage(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <span>Pic</span>
          <span>You&apos;re logged in as Jenny Jones</span>
        </div>
        <div className={classNames(styles.wrapper, styles.wrapper_blue)}>
          <span>Switch</span>
          <FontAwesomeIcon width="8px" icon={faChevronRight} />
        </div>
      </div>

      <div className={styles.id_and_ref}>
        <span>Bill# 923812397</span>
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
            Jenny Jones
            <br />
            Jenny@beamcheckout.com
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
          <span>HSBC *1234</span>
        </div>
      </div>

      <div className={styles.row_bottom}>
        <div className={styles.wrapper}>
          <span>Total</span>
          <span className={styles.vat_text}>(%7 Vat Included)</span>
        </div>
        <span>8,400 THB</span>
      </div>

      <button className={styles.button} onClick={props.buttonHandleClick}>
        CLICK TO PAY
      </button>
    </div>
  )
}
