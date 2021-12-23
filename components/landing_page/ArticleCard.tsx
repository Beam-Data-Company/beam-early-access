import styles from './ArticleCard.module.css'
import Text from '../Text'
import Spacer from '../Spacer'
import Image from 'next/image'

type Props = {
  title: string
  description: string
  image: StaticImageData
  alt: string
}

export default function ArticleCard(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image_not_phone}>
        <Image src={props.image} alt={props.alt} objectFit="cover" priority />
      </div>
      <div className={styles.image_phone}>
        <Image
          src={props.image}
          alt={props.alt}
          objectFit="cover"
          layout="fill"
          priority
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
