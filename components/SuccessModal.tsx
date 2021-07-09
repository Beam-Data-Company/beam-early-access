import React, { useState } from 'react'
import Modal from 'react-modal'
import envelope from '../public/envelope.png'
import Image from 'next/image'
import styles from './SuccessModal.module.css'

export default function SuccessModal() {
  const [visible, setVisible] = useState(true)

  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => setVisible(false)}
      className={styles.modalBox}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalImage}>
        <Image src={envelope} alt="Envelope" placeholder="blur" priority />
      </div>
      <h2 className={styles.modalTitle}>Thank you!</h2>
      <p className={styles.modalSubtitle}>
        The Beam team will get in touch with you as soon as possible.
      </p>
    </Modal>
  )
}
