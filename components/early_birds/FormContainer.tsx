import styles from './FormContainer.module.css'
import { Form } from 'formik'
import classNames from 'classnames'

type Props = {
  children: React.ReactNode
  className: string
}

export default function FormContainer(props: Props) {
  return (
    <Form className={classNames(styles.form_container, props.className)}>
      {props.children}
    </Form>
  )
}
