import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './LifestylePicAnimation.module.css'
import Image from 'next/image'
import PictureOne from '../../public/earlybird/get_started/picture-1.png'
import PictureTwo from '../../public/earlybird/get_started/picture-2.png'
import PictureThree from '../../public/earlybird/get_started/picture-3.png'
import PictureFour from '../../public/earlybird/get_started/picture-4.png'
import PictureFive from '../../public/earlybird/get_started/picture-5.png'
import PictureSix from '../../public/earlybird/get_started/picture-6.png'
import PictureSeven from '../../public/earlybird/get_started/picture-7.png'
import PictureEight from '../../public/earlybird/get_started/picture-8.png'

const slides = [
  PictureOne,
  PictureTwo,
  PictureThree,
  PictureFour,
  PictureFive,
  PictureSix,
  PictureSeven,
  PictureEight,
]

export default function LifestylePicAnimation() {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 4000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  })
  return (
    <div>
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
          }}
        >
          <Image src={slides[i]} alt="Banner Picture" priority />
        </animated.div>
      ))}
    </div>
  )
}
