import styles from './ArticleCard.module.css'
import Text from '../Text'
import Spacer from '../Spacer'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

type Props = {
  title: string
  description: string
  image: StaticImageData
  alt: string
}

export default function ArticleCard(props: Props) {
  const isPhone = useMediaQuery({ maxWidth: 600 })

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt={props.alt}
          objectFit="cover"
          layout={isPhone ? 'fill' : undefined}
        />
      </div>
      <div className={styles.bottom_section}>
        <Text color="#383838">{props.title}</Text>
        <Spacer height={10} />
        <div className={styles.description}>
          <Text color="#383838" family="Assistant">
            {props.description}
          </Text>
        </div>
      </div>
    </div>
  )
}
