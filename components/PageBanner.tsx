import Header from './Header'
import styles from './PageBanner.module.css'
import Text from './Text'
import { useMediaQuery } from 'react-responsive'

type Props = {
  title: string
  children?: React.ReactNode
}

export default function PageBanner(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <Text
          family="Lexend Deca"
          size={isPhonePortrait ? 26 : 32}
          color="white"
        >
          {props.title}
        </Text>
        <div className={styles.image_wrapper}>{props.children}</div>
      </div>
    </div>
  )
}
