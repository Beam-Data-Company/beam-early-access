import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PageBanner from '../PageBanner'
import Spacer from '../Spacer'
import styles from './FaqLayout.module.css'
import Footer from '../Footer'
import ContactSupportCard from './ContactSupportCard'
// import CategoryGrid from './CategoryGrid'

type Props = {
  pageTitle: string
  image: React.ReactNode
  children: React.ReactNode
  contentList: any[]
}

export default function FaqLayout(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <div className={styles.main_container}>
      <PageBanner title={props.pageTitle}>{props.image}</PageBanner>
      <div className={styles.main_footer_wrapper}>
        <div className={styles.main_wrapper}>
          {/* <Spacer height={isPhonePortrait ? 30 : 40} />
          <CategoryGrid /> */}
          <Spacer height={isPhonePortrait ? 30 : 40} />
          <div>{props.children}</div>
        </div>
        {!isPhonePortrait && <Spacer height={70} />}
        <ContactSupportCard />
        <Spacer height={50} />
        <Footer variant="black" />
      </div>
    </div>
  )
}
