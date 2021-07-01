import React, { useState } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'
import classNames from 'classnames'
import styles from '../components/MailchimpForm.module.css'
import ThankYouModal from './ThankYouModal'
import Loading from './Loading'

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

  const renderEmailForm = () => {
    if (props.status === 'success') {
      return (
        <div>
          <div className={styles.alert}>Thank you!</div>
          <ThankYouModal />
        </div>
      )
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Your work email address"
          onChange={handleChange}
          className={classNames(
            styles.input,
            props.status === 'error' && styles.inputError,
            props.status === 'sending' && styles.inputDisable
          )}
          disabled={props.status === 'sending'}
          required
        />
        <button className={styles.button} type="submit">
          {props.status === 'sending' ? <Loading /> : 'Get Access \u2192'}
        </button>
      </form>
    )
  }

  return (
    <div className={styles.form_container}>
      <h1 className={styles.title}>Get Early Access</h1>
      <h2 className={styles.description}>
        Beam Instant Checkout, a frictionless customer experience on your social
        messaging platforms and website
      </h2>
      {renderEmailForm()}
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
