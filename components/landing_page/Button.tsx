import styles from './Button.module.css'
import Text from '../Text'
import classNames from 'classnames'

type Props = {
  content: string
  variant: 'outlined' | 'contained'
}

export default function Button(props: Props) {
  return (
    <button
      className={classNames(
        styles.button,
        props.variant === 'outlined' ? styles.outlined : styles.contained
      )}
    >
      <Text family="Assistant" weight={600} size={18}>
        {props.content}
      </Text>
    </button>
  )
}
