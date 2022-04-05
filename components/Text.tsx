import styles from './Text.module.css'

type Props = {
  size?: number
  color?: string
  family?: 'Lexend Deca' | 'Assistant' | 'Prompt' | 'IBM Plex Sans Thai'
  weight?: number
  lineHeight?: number
  underlineOnHover?: boolean
  children: React.ReactNode
}

export default function Text(props: Props) {
  return (
    <span
      style={{
        fontSize: props.size && `${props.size}px`,
        color: props.color,
        fontFamily: props.family,
        fontWeight: props.weight,
        lineHeight: props.lineHeight && `${props.lineHeight}px`,
      }}
      className={props.underlineOnHover ? styles.text : ''}
    >
      {props.children}
    </span>
  )
}
