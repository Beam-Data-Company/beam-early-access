import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PageBanner from './PageBanner'
import Spacer from './Spacer'
import styles from './Layout.module.css'
import Footer from './Footer'
import SideBar from './SideBar'

type Props = {
  pageTitle: string
  image: React.ReactNode
  children: React.ReactNode
  contentTitle: string
  contentList: any[]
}

export default function Layout(props: Props) {
  const isLessThan600 = useMediaQuery({ maxWidth: 600 })
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <div className={styles.main_container}>
      <PageBanner title={props.pageTitle}>{props.image}</PageBanner>
      <div className={styles.main_footer_wrapper}>
        <Spacer height={isPhonePortrait ? 30 : 55} />
        <div className={styles.main_area}>
          {!isLessThan600 && (
            <SideBar
              contentTitle={props.contentTitle}
              contentList={props.contentList}
            />
          )}
          <div className={styles.content_wrapper}>{props.children}</div>
        </div>
        {!isPhonePortrait && <Spacer height={120} />}
        <Footer variant="black" />
      </div>
    </div>
  )
}
