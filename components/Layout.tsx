import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PageBanner from './PageBanner'
import Spacer from './Spacer'
import styles from './Layout.module.css'
import Footer from './Footer'
import SideBar from './SideBar'
import ContactSupportCard from './faq_page/ContactSupportCard'
import { useState, useEffect } from 'react'

type Props = {
  pageTitle: string
  image: React.ReactNode
  children: React.ReactNode
  contentTitle: string
  contentList: any[]
  showContactSupportCard?: boolean
  stickySideBar?: boolean
  noFirstParagraph?: boolean
  isThai?: boolean
}

export default function Layout(props: Props) {
  const isLessThan600 = useMediaQuery({ maxWidth: 600 })
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

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
              sticky={props.stickySideBar}
              noFirstParagraph={props.noFirstParagraph}
              isThai={props.isThai}
            />
          )}
          <div className={styles.content_wrapper}>{props.children}</div>
        </div>
        {!isPhonePortrait && <Spacer height={120} />}
        {mounted && props.showContactSupportCard && (
          <>
            <Spacer height={15} />
            <ContactSupportCard />
            <Spacer height={50} />
          </>
        )}
        <Footer variant="black" />
      </div>
    </div>
  )
}
