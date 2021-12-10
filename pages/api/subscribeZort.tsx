// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY_ZORT_EB,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER_ZORT_EB,
})

type Data = {
  error: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { merchantName, email, fullName, country, phoneNumber } = req.body
  const phoneWithCountryCode = `${country} ${phoneNumber}`
  const audienceID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID_ZORT_EB

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!audienceID) {
    return res.status(400).json({ error: 'Audience ID does not exist' })
  }

  try {
    await mailchimp.lists.addListMember(audienceID, {
      email_address: email,
      merge_fields: {
        MERCHNAME: merchantName,
        FULLNAME: fullName,
        PHONE: phoneWithCountryCode,
      },
      status: 'subscribed' as any,
    })
    return res.status(201).json({ error: '' })
  } catch (error: any) {
    const errorObject = JSON.parse(error.response.text)
    return res.status(errorObject.status).json({ error: errorObject.detail })
  }
}
