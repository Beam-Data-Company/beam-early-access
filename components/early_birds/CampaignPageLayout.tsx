import styles from './CampaignPageLayout.module.css'
import classNames from 'classnames'
import Header from '../Header'
import backgroundShapes from '../../public/earlybird/background-shapes.png'
import Image from 'next/image'
import Remarks from './Remarks'
import { useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  className: string
  banner: React.ReactNode
  form: React.ReactNode
  boxShadow?: boolean
  is10kBoosterPage?: boolean
  noBackgroundShapes?: boolean
}

export default function CampaignPageLayout(props: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <Header />
      {!props.noBackgroundShapes && (
        <div className={styles.shapes_container}>
          <Image src={backgroundShapes} alt="Background Shapes" />
        </div>
      )}
      <div
        className={classNames(
          styles.main_container,
          props.boxShadow && styles.__box_shadow
        )}
      >
        {props.banner}
        {props.children}
        {props.form}
        {mounted && <Remarks is10kBoosterPage={props.is10kBoosterPage} />}
      </div>
    </div>
  )
}
