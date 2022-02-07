import privacyImage from '../public/privacy-image.png'
import Spacer from '../components/Spacer'
import Image from 'next/image'
import Text from '../components/Text'
import { InferGetStaticPropsType } from 'next'
import Layout from '../components/Layout'
import { generateAnchorID } from '../components/SideBar'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

type Policy = {
  id: number
  title: string
  content: string
}

const components = { Text }

export default function PrivacyPolicy({
  data,
  policyContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const policiesArray = data.policies
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <Layout
      pageTitle="Privacy by Design"
      image={
        <div style={{ display: 'flex', width: '390px', marginBottom: '35px' }}>
          <Image src={privacyImage} alt="Privacy Image" />
        </div>
      }
      contentTitle={data.title}
      contentList={data.policies}
    >
      <Text size={isPhonePortrait ? 26 : 32} family="Lexend Deca">
        {data.title}
      </Text>
      <Spacer height={10} />
      <Text color="#535353" weight={600}>
        Updated as of: {data.last_update}
      </Text>
      <Spacer height={isPhonePortrait ? 20 : 25} />

      {policiesArray.map((policy: Policy, index: number) => (
        <section id={generateAnchorID(policy.title)} key={policy.title}>
          <Text size={isPhonePortrait ? 18 : 20} family="Lexend Deca">
            {policy.title}
          </Text>
          <Spacer height={isPhonePortrait ? 10 : 15} />
          <Text
            color="#535353"
            lineHeight={26}
            size={isPhonePortrait ? 14 : 16}
          >
            <MDXRemote
              compiledSource={policyContent[index].compiledSource}
              components={components}
            />
          </Text>
          <Spacer height={isPhonePortrait ? 20 : 14} />
        </section>
      ))}
    </Layout>
  )
}

type PrivacyResponse = {
  id: number
  title: string
  last_update: string
  published_at: string
  created_at: string
  updated_at: string
  policies: Policy[]
}

export const getStaticProps = async () => {
  const { data } = await axios.get<
    Pick<PrivacyResponse, 'title' | 'last_update' | 'policies'>
  >(`${process.env.NEXT_PUBLIC_STRAPI_URL}/privacy-policy`)

  const html = await Promise.all(
    data.policies.map((policy) => serialize(policy.content))
  )

  return { props: { data, policyContent: html } }
}
