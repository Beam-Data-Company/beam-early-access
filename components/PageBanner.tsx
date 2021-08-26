import Header from './Header'
import styles from './PageBanner.module.css'
import Text from './Text'
import ImageBox from './ImageBox'

type Props = {
  title: string
  imageArray: {
    src: StaticImageData
    width: number
    alt: string
  }[]
}

export default function PageBanner(props: Props) {
  const renderImages = () =>
    props.imageArray.map(({ src, width, alt }, i) => {
      return <ImageBox width={width} src={src} alt={alt} key={i} />
    })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <Text family="Lexend Deca" size={32} color="white">
          {props.title}
        </Text>
        <div className={styles.image_wrapper}>{renderImages()}</div>
      </div>
    </div>
  )
}
