import React, { useState } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'
import styles from '../components/MailchimpForm.module.css'

type Props = {
  status: 'success' | 'sending' | 'error' | null
  message: string | Error | null
  onValidated: (data: EmailFormFields) => void
}

function CustomForm(props: Props) {
  const [email, setEmail] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onValidated({
      EMAIL: email,
    })
  }

  return (
    <div className={styles.form_container}>
      <h1 className={styles.title}>Instant Checkout Early Access</h1>

      {props.status === 'success' ? (
        <div className={styles.alert}>Thank you!</div>
      ) : (
        <div>
          <div className={styles.alert}>
            {props.status === 'sending' && <div>sending...</div>}

            {props.status === 'error' && (
              <div
                dangerouslySetInnerHTML={{ __html: String(props.message) }}
              />
            )}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {props.status === 'error' || props.status === null ? (
              <input
                type="email"
                value={email}
                placeholder="Your work email address"
                onChange={handleChange}
                className={styles.input}
                required
              />
            ) : null}

            {props.status === 'error' || props.status === null ? (
              <div>
                <input
                  value="Get Access"
                  type="submit"
                  className={styles.button}
                />
              </div>
            ) : null}
          </form>
        </div>
      )}
    </div>
  )
}

function getMailchimpUrl() {
  const postUrl = `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`
  return postUrl
}

function MailchimpFormContainer() {
  const postUrl = getMailchimpUrl()
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm status={status} message={message} onValidated={subscribe} />
      )}
    />
  )
}

export default MailchimpFormContainer
