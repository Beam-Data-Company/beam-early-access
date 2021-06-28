import React, { useState, useEffect } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import styles from '../styles/Home.module.css'

type Props = {
  status: string | null
  message: string | Error | null
  onValidated: (obj: { EMAIL: string }) => void
}

function CustomForm(props: Props) {
  const [email, setEmail] = useState('')

  useEffect(
    function () {
      if (props.status === 'success') setEmail('')
    },
    [props.status]
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    email &&
      props.onValidated({
        EMAIL: email,
      })
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        {props.status === 'success'
          ? 'Success!'
          : 'Instant Checkout Early Access'}
      </div>

      <div className={styles.alert}>
        {props.status === 'sending' && <div>sending...</div>}

        {props.status === 'error' && (
          <div dangerouslySetInnerHTML={{ __html: String(props.message) }} />
        )}

        {props.status === 'success' && (
          <div dangerouslySetInnerHTML={{ __html: String(props.message) }} />
        )}
      </div>

      <form onSubmit={handleSubmit}>
        {props.status !== 'success' ? (
          <input
            type="email"
            value={email}
            placeholder="Your work email address"
            onChange={handleChange}
            className={styles.input}
            style={{ fontFamily: 'Lexend Deca' }}
            required
          />
        ) : null}

        {props.status !== 'success' ? (
          <div>
            <input
              value="Get Access"
              type="submit"
              className={styles.button}
              style={{ fontFamily: 'Lexend Deca' }}
            />
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  )
}

function MailchimpFormContainer() {
  const postUrl = `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`

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
