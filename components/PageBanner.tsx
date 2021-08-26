import Header from './Header'
import styles from './PageBanner.module.css'
import Text from './Text'

type Props = {
  title: string
  children?: React.ReactNode
}

export default function PageBanner(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <Text family="Lexend Deca" size={32} color="white">
          {props.title}
        </Text>
        <div className={styles.image_wrapper}>{props.children}</div>
      </div>
    </div>
  )
}
