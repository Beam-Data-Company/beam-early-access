import Link from 'next/link'
import React from 'react'
import Modal from 'react-modal'
import styles from './StartedModal.module.css'

type Props = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StartedModal(props: Props) {
  return (
    <Modal
      isOpen={props.visible}
      onRequestClose={() => props.setVisible(false)}
      className={styles.modalBox}
      overlayClassName={styles.overlay}
    >
      <h2 className={styles.modalTitle}>Get Started</h2>
      <div className={styles.buttonContainer}>
        <Link href="https://lighthouse.beamdata.co/login" passHref>
          <button className={styles.button}>
            <h3>Business Account</h3>
            <p>Get Beam instant checkout for your business</p>
          </button>
        </Link>

        <button className={styles.button} disabled={true}>
          <h3>Individual Account</h3>
          <p>Register and download Beam mobile application</p>
        </button>
      </div>
    </Modal>
  )
}
