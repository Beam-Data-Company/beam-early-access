import styles from './CampaignPageLayout.module.css'
import classNames from 'classnames'
import Header from '../Header'
import BackgroundShapes from './BackgroundShapes'
import Remarks from './Remarks'
import { useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  classNameBackground: string
  banner: React.ReactNode
  form: React.ReactNode
  mountedRemarks?: boolean
}

export default function CampaignPageLayout(props: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={classNames(styles.wrapper, props.classNameBackground)}>
      <Header />
      <BackgroundShapes />
      <div className={styles.main_container}>
        {props.banner}
        {props.children}
        {props.form}
        {props.mountedRemarks ? mounted && <Remarks /> : <Remarks />}
      </div>
    </div>
  )
}
