import FaqImage from '../../public/faq-image.png'
import Spacer from '../../components/Spacer'
import Image from 'next/image'
import Text from '../../components/Text'
import { InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import { generateAnchorID } from '../../components/SideBar'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

type Question = {
  id: number
  title: string
  content: string
}

const components = { Text }

export default function FaqThai({
  data,
  questionContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const questionsArray = data.questions
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <Layout
      pageTitle="Frequently Asked Questions"
      image={
        <div style={{ display: 'flex', width: '390px', marginBottom: '0px' }}>
          <Image src={FaqImage} alt="Faq Image" />
        </div>
      }
      contentTitle={data.title}
      contentList={data.questions}
      isFaq
      isThai
    >
      <Text
        size={isPhonePortrait ? 26 : 32}
        family="IBM Plex Sans Thai"
        weight={600}
      >
        {data.title}
      </Text>
      <Spacer height={isPhonePortrait ? 25 : 30} />

      {questionsArray.map((question: Question, index: number) => (
        <section id={generateAnchorID(question.title)} key={question.title}>
          <Text
            size={isPhonePortrait ? 18 : 20}
            family="IBM Plex Sans Thai"
            weight={600}
          >
            {question.title}
          </Text>
          <Spacer height={isPhonePortrait ? 10 : 15} />
          <Text
            color="#535353"
            lineHeight={26}
            size={isPhonePortrait ? 14 : 16}
            family="IBM Plex Sans Thai"
          >
            <MDXRemote
              compiledSource={questionContent[index].compiledSource}
              components={components}
            />
          </Text>
          <Spacer height={isPhonePortrait ? 20 : 14} />
        </section>
      ))}
    </Layout>
  )
}

type FaqResponse = {
  id: number
  title: string
  last_updated: string
  published_at: string
  created_at: string
  updated_at: string
  questions: Question[]
}

export const getStaticProps = async () => {
  const { data } = await axios.get<
    Pick<FaqResponse, 'title' | 'last_updated' | 'questions'>
  >(`${process.env.NEXT_PUBLIC_STRAPI_URL}/faq-thai`)

  const html = await Promise.all(
    data.questions.map((question) => serialize(question.content))
  )

  return { props: { data, questionContent: html } }
}
