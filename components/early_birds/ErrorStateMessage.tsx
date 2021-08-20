import { ErrorMessage } from 'formik'
import Text from '../Text'

export default function ErrorStateMessage(props: { name: string }) {
  return (
    <Text color="#f65129" family="Assistant">
      <ErrorMessage name={props.name} />
    </Text>
  )
}
