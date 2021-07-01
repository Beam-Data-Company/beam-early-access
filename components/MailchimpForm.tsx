import React, { useState } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'
import classNames from 'classnames'

import styles from '../components/MailchimpForm.module.css'
import Modal from './Modal'

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
          <Modal />
        </div>
      )
    }

    if (props.status === 'sending') {
      return <div className={styles.alert}>sending...</div>
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
            props.status === 'error' && styles.inputError
          )}
          required
        />
        <button className={styles.button} type="submit">
          Get Access &#10132;
        </button>
      </form>
    )
  }

  return (
    <div className={styles.form_container}>
      <h1 className={styles.title}>Instant Checkout Early Access</h1>
      <h2 className={styles.description}>
        Get Beam Instant Checkout for your business. Experience the frictionless
        payment available for all platforms.
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
