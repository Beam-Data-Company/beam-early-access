import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styles from './SuccessModal.module.css'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export default function Modal(props: Props) {
  const [visible, setVisible] = useState(true)

  return (
    <ReactModal
      isOpen={visible}
      onRequestClose={() => setVisible(false)}
      className={styles.modalBox}
      overlayClassName={styles.overlay}
    >
      {props.children}
    </ReactModal>
  )
}
