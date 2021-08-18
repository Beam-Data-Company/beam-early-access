import { ErrorMessage } from 'formik'
import styles from './ErrorStateMessage.module.css'

type Props = {
  name: string
}

export default function ErrorStateMessage(props: Props) {
  return (
    <div className={styles.error_message}>
      <ErrorMessage name={props.name} />
    </div>
  )
}
