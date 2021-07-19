import React from 'react'
import ReactModal from 'react-modal'
import styles from './Modal.module.css'
import classNames from 'classnames'

type Props = {
  children?: React.ReactNode
  visible: boolean
  closeModal: () => void
  className?: string
}

export default function Modal(props: Props) {
  return (
    <ReactModal
      isOpen={props.visible}
      onRequestClose={props.closeModal}
      className={classNames(styles.modalBox, props.className)}
      overlayClassName={styles.overlay}
    >
      {props.children}
    </ReactModal>
  )
}
