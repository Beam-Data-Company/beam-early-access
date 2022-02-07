import tncsImage from '../public/tncs-image.png'
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

type Term = {
  id: number
  title: string
  content: string
}

const components = { Text }

export default function TermsAndConditions({
  data,
  termContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const termsArray = data.terms
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <Layout
      pageTitle="Terms &amp; Conditions"
      image={
        <div style={{ display: 'flex', width: '424px' }}>
          <Image src={tncsImage} alt="TNCS Image" />
        </div>
      }
      contentTitle={data.title}
      contentList={data.terms}
    >
      <Text size={isPhonePortrait ? 26 : 32} family="Lexend Deca">
        {data.title}
      </Text>
      <Spacer height={10} />
      <Text color="#535353" weight={600}>
        Updated as of: {data.last_updated}
      </Text>
      <Spacer height={isPhonePortrait ? 20 : 25} />

      {termsArray.map((term: Term, index: number) => (
        <section id={generateAnchorID(term.title)} key={term.title}>
          <Text size={isPhonePortrait ? 18 : 20} family="Lexend Deca">
            {term.title}
          </Text>
          <Spacer height={isPhonePortrait ? 10 : 15} />
          <Text
            color="#535353"
            lineHeight={26}
            size={isPhonePortrait ? 14 : 16}
          >
            <MDXRemote
              compiledSource={termContent[index].compiledSource}
              components={components}
            />
          </Text>
          <Spacer height={isPhonePortrait ? 20 : 14} />
        </section>
      ))}
    </Layout>
  )
}

type TermResponse = {
  id: number
  title: string
  last_updated: string
  published_at: string
  created_at: string
  updated_at: string
  terms: Term[]
}

export const getStaticProps = async () => {
  const { data } = await axios.get<
    Pick<TermResponse, 'title' | 'last_updated' | 'terms'>
  >(`${process.env.NEXT_PUBLIC_STRAPI_URL}/terms-of-service`)

  const html = await Promise.all(
    data.terms.map((term) => serialize(term.content))
  )

  return { props: { data, termContent: html } }
}
