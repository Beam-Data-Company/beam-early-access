import backgroundShapes from '../../public/earlybird/background-shapes.png'
import Image from 'next/image'
import styles from './BackgroundShapes.module.css'

export default function BackgroundShapes() {
  return (
    <div className={styles.shapes_container}>
      <Image src={backgroundShapes} alt="Background Shapes" />
    </div>
  )
}
