import styles from './PaymentPage.module.css'
import React from 'react'
import Image from 'next/image'
import cardIcon from '../../public/card-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  onClick: () => void
}

export default function PaymentPage(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <div>Pic</div>
          <div>You&apos;re logged in as Jenny Jones</div>
        </div>
        <div className={styles.wrapper_blue}>
          <div>Switch</div>
          <FontAwesomeIcon width="8px" icon={faChevronRight} />
        </div>
      </div>

      <div className={styles.id_and_ref}>
        <p>Bill# 923812397</p>
        <p>Ref: E-Commerce</p>
      </div>

      <div className={styles.section}>
        <div className={styles.section_header}>
          <div>Customer Detail</div>
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
          <div>Payment</div>
          <FontAwesomeIcon width="14px" color="#c9c9c9" icon={faPen} />
        </div>

        <div className={styles.info_box_payment}>
          <div className={styles.wrapper}>
          <div className={styles.card_icon}>
            <Image src={cardIcon} alt="Card Icon" placeholder="blur" priority />
          </div>
          <div>Credit/Debit</div>
          </div>
          <div>HSBC *1234</div>
        </div>
      </div>

      <div className={styles.row_bottom}>
        <div className={styles.wrapper}>
          <div>Total</div>
          <div className={styles.vat_text}>(%7 Vat Included)</div>
        </div>
        <div>8,400 THB</div>
      </div>

      <button className={styles.button} onClick={props.onClick}>
        CLICK TO PAY
      </button>
    </div>
  )
}
