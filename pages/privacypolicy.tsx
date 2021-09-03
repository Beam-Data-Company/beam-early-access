import lockImage from '../public/lock-image.png'
import Spacer from '../components/Spacer'
import ImageBox from '../components/ImageBox'
import Text from '../components/Text'
import { InferGetStaticPropsType } from 'next'
import Layout from '../components/Layout'

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
        <Spacer height={15} heightPhoneResponsive={10} />
        <Text color="#535353" lineHeight={26}>
          {policy.content}
        </Text>
        <Spacer height={20} heightPhoneResponsive={28} />
      </>
    ))
  }
  return (
    <Layout
      pageTitle="Privacy by Design"
      image={
        <>
          <ImageBox width={113} src={lockImage} alt="Lock Image" />
          <ImageBox width={113} src={lockImage} alt="Lock Image" />
          <ImageBox width={113} src={lockImage} alt="Lock Image" />
        </>
      }
    >
      <Text size={32} sizePhoneResponsive={26} family="Lexend Deca">
        {data.title}
      </Text>
      <Spacer height={10} />
      <Text color="#535353" weight={600}>
        Last Update: {data.last_update}
      </Text>
      <Spacer height={40} heightPhoneResponsive={30} />
      {renderPolicies()}
    </Layout>
  )
}
