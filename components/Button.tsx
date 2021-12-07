import styles from './Button.module.css'
import Text from './Text'
import classNames from 'classnames'

type Props = {
  children: React.ReactNode
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
        {props.children}
      </Text>
    </button>
  )
}
