import envelope from '../public/envelope.png'
import Image from 'next/image'
import styles from './SuccessModal.module.css'
import Modal from './Modal'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

export default function SuccessModal(props: Props) {
  return (
    <Modal
      visible={props.isOpen}
      closeModal={props.closeModal}
      className={styles.successModalBox}
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
