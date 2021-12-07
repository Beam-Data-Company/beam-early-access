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
      <Image src={props.image} alt={props.alt} width={374} height={178} />
      <div className={styles.bottom_section}>
        <Text color="#383838">{props.title}</Text>
        <Spacer height={10} />
        <Text color="#383838" family="Assistant">
          {props.description}
        </Text>
      </div>
    </div>
  )
}
