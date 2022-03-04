import styles from './InputFieldWrapper.module.css'
import classNames from 'classnames'

export default function InputFieldWrapper(props: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={classNames(styles.wrapper, props.className)}>
      {props.children}
    </div>
  )
}
