import lockImage from '../public/lock-image.png'
import Spacer from '../components/Spacer'
import ImageBox from '../components/ImageBox'
import Text from '../components/Text'
import { InferGetStaticPropsType } from 'next'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import markdownToHtml from '../lib/markdownToHtml'

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:1337/privacy-policy')
  const x = await Promise.all(data.policies.map((item)=>{
    
    return markdownToHtml(item.content)
  }))

  console.log(x)



  return { props: { data }}
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
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  const renderPolicies = () => {
    return policiesArray.map((policy: Policy) => (
      <div id={policy.title} key={policy.title}>
        <Text size={20} family="Lexend Deca">
          {policy.title}
        </Text>
        <Spacer height={isPhonePortrait ? 10 : 15} />
        <Text color="#535353" lineHeight={26}>
          {policy.content}  
        </Text>
        <Spacer height={isPhonePortrait ? 28 : 20} />
      </div>
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
      sideBar={<SideBar title={data.title} contentTitle={data.policies}/>}
    >
      <Text size={isPhonePortrait ? 26 : 32} family="Lexend Deca">
        {data.title}
      </Text>
      <Spacer height={10} />
      <Text color="#535353" weight={600}>
        Last Update: {data.last_update}
      </Text>
      <Spacer height={isPhonePortrait ? 30 : 40} />
      {renderPolicies()}
    </Layout>
  )
}
