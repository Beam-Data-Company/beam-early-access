import Link from 'next/link'

import Header from '../components/Header'
import styles from '../styles/PageNotFound.module.css'

export default function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.heading}>404 page not found</h1>
          <p className={styles.description}>
            Go back to <Link href="/">home page</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
