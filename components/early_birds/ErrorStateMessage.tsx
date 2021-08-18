import { ErrorMessage } from 'formik'
import styles from './ErrorStateMessage.module.css'
import Text from '../Text'
type Props = {
  name: string
}

export default function ErrorStateMessage(props: Props) {
  return (
    <div className={styles.error_message}>
      <Text color="#f65129" family="Assistant">
        <ErrorMessage name={props.name} />
      </Text>
    </div>
  )
}
