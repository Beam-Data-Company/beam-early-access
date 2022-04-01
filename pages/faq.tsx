import FaqImage from '../public/faq-image.png'
import Spacer from '../components/Spacer'
import Image from 'next/image'
import Text from '../components/Text'
import { InferGetStaticPropsType } from 'next'
import FaqLayout from '../components/faq_page/FaqLayout'
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

export default function Faq({
  data,
  questionContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const questionsArray = data.questions
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <FaqLayout
      pageTitle="Frequently Asked Questions"
      image={
        <div style={{ display: 'flex', width: '390px', marginBottom: '0px' }}>
          <Image src={FaqImage} alt="Faq Image" />
        </div>
      }
      contentList={data.questions}
    >
      <Text size={isPhonePortrait ? 26 : 32} family="Lexend Deca">
        {data.title}
      </Text>
      <Spacer height={isPhonePortrait ? 25 : 30} />

      {questionsArray.map((question: Question, index: number) => (
        <section key={question.title}>
          <Text size={isPhonePortrait ? 18 : 20} family="Lexend Deca">
            {question.title}
          </Text>
          <Spacer height={isPhonePortrait ? 10 : 15} />
          <Text
            color="#535353"
            lineHeight={26}
            size={isPhonePortrait ? 14 : 16}
          >
            <MDXRemote
              compiledSource={questionContent[index].compiledSource}
              components={components}
            />
          </Text>
          <Spacer height={isPhonePortrait ? 20 : 14} />
        </section>
      ))}
    </FaqLayout>
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
  >(`${process.env.NEXT_PUBLIC_STRAPI_URL}/faq`)

  const html = await Promise.all(
    data.questions.map((question) => serialize(question.content))
  )

  return { props: { data, questionContent: html } }
}
