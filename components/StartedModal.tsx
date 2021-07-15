import Link from 'next/link'
import React from 'react'
import Modal from './Modal'
import styles from './StartedModal.module.css'
import Image from 'next/image'
import businessIcon from '../public/business-icon.svg'
import individualIcon from '../public/individual-icon.svg'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function StartedModal(props: Props) {
  return (
    <Modal
      visible={props.isOpen}
      closeModal={props.onClose}
      className={styles.startedModalBox}
    >
      <h2 className={styles.modalTitle}>Get Started</h2>
      <div className={styles.buttonContainer}>
        <Link href="https://lighthouse.beamdata.co/login" passHref>
          <button className={styles.button} style={{ cursor: 'pointer' }}>
            <h3 className={styles.buttonTitle}>Business Account</h3>
            <div className={styles.icon}>
              <Image src={businessIcon} alt="Business Icon" priority />
            </div>
            <p className={styles.buttonSubtitle}>
              Get Beam instant checkout for your business
            </p>
          </button>
        </Link>

        <button className={styles.button} disabled>
          <h3 className={styles.buttonTitle}>Individual Account</h3>
          <div className={styles.icon} style={{ filter: 'grayscale(100%)' }}>
            <Image src={individualIcon} alt="Individual Icon" priority />
          </div>
          <p className={styles.buttonSubtitle}>
            Register and download Beam mobile application
          </p>
        </button>
      </div>
    </Modal>
  )
}
