// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY_EARLY_ACCESS,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER_EARLY_ACCESS,
})

type Data = {
  error: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email } = req.body
  const audienceID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID_EARLY_ACCESS

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!audienceID) {
    return res.status(400).json({ error: 'Audience ID does not exist' })
  }

  try {
    await mailchimp.lists.addListMember(audienceID, {
      email_address: email,
      status: 'subscribed' as any,
    })
    return res.status(201).json({ error: '' })
  } catch (error: any) {
    const errorObject = JSON.parse(error.response.text)
    return res.status(errorObject.status).json({ error: errorObject.detail })
  }
}
