import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer'
import styles from '../styles/privacypolicy.module.css'
import lockImage from '../public/lock-image.png'
import Spacer from '../components/Spacer'
import ImageBox from '../components/ImageBox'
import Text from '../components/Text'
import { InferGetStaticPropsType } from 'next'

//change this to axios??
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/privacy-policy')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

type Policy = {
  id: number
  title: string
  content: string
}
export default function PrivacyPolicy({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const policiesArray = data.policies

  const renderPolicies = () => {
    return policiesArray.map((policy: Policy) => (
      <>
        <Text size={20} family="Lexend Deca">
          {policy.title}
        </Text>
        <Spacer height={15} />
        <Text color="#535353">{policy.content}</Text>
        <Spacer height={20} />
      </>
    ))
  }
  return (
    <div className={styles.main_container}>
      <PageBanner title="Privacy by Design">
        <ImageBox width={113} src={lockImage} alt="Lock Image" />
        <ImageBox width={113} src={lockImage} alt="Lock Image" />
        <ImageBox width={113} src={lockImage} alt="Lock Image" />
      </PageBanner>
      <Spacer height={55} />
      <div className={styles.content_wrapper}>
        <Text size={32} family="Lexend Deca">
          {data.title}
        </Text>
        <Spacer height={10} />
        <Text color="#535353" weight={600}>
          Last Update: {data.last_update}
        </Text>
        <Spacer height={40} />
        {renderPolicies()}
      </div>
      <Spacer height={120} />
      <Footer />
    </div>
  )
}
