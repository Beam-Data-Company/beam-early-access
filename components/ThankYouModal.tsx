import React, { useState } from 'react'
import ReactModal from 'react-modal'
import envelope from '../envelope.png'
import Image from 'next/image'
import styles from '../components/Modal.module.css'

export default function ThankYouModal() {
  const [modalIsOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modalBox}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalImage}>
        <Image src={envelope} alt="Envelope" />
      </div>
      <h2 className={styles.modalTitle}>Thank you!</h2>
      <p className={styles.modalSubtitle}>
        Our Sales will contact you back as soon as possible.
      </p>
    </ReactModal>
  )
}
