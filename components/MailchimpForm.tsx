import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'
import classNames from 'classnames'

import styles from '../components/MailchimpForm.module.css'
import ThankYouModal from './ThankYouModal'
import Loading from './Loading'

type Props = {
  status: 'success' | 'sending' | 'error' | null
  message: string | Error | null
  subscribeEmail: (data: EmailFormFields) => void
}

function EmailForm(props: Props) {
  const emailInput = useRef<HTMLInputElement | null>(null)

  const [email, setEmail] = useState('')


  useEffect(() => {
    emailInput && emailInput.current?.focus()
  }, [])

  useEffect(() => {
    if (props.status === 'success') {
      setEmail('')
    }
  }, [props.status])

  const isSending = useMemo(() =>
    props.status === 'sending'
    , [props.status])

  const errorMessage = useMemo(() => {
    if (!props.message) {
      return null
    }

    if (props.message instanceof Error) {
      return props.message.message
    }

    const isSubscribed = /already subscribed/g.test(props.message)
    const isInvalid = /invalid/g.test(props.message)

    if (isSubscribed) {
      return 'This email is already subscribed.'
    }


    if (isInvalid) {
      return 'This email is invalid.'
    }

    return props.message
  }, [props.message])

  const renderErrorMessage = useCallback(() => {
    if (props.status !== 'error' || !errorMessage) {
      return null
    }

    return (
      <span className={styles.error_container}>
        {errorMessage}
      </span>
    )
  }, [errorMessage, props.status])


  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    props.subscribeEmail({
      EMAIL: email,
    })
  }, [email, props])



  return (
    <>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <input
          ref={emailInput}
          className={classNames(
            styles.input,
            isSending && styles.inputDisabled,
            props.status === 'error' && styles.inputError,
          )}
          type="email"
          placeholder="Your work email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isSending}
          required
        />
        <button className={styles.button} type="submit" disabled={isSending}>
          {isSending ? <Loading /> : 'Get Access \u2192'}
        </button>
      </form>
      {renderErrorMessage()}
    </>
  )
}

export default function MailchimpForm() {
  const postUrl = getMailchimpUrl()

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <>
          <EmailForm status={status} message={message} subscribeEmail={subscribe} />
          {status === 'success' && <ThankYouModal />}
        </>
      )}
    />
  )
}

function getMailchimpUrl() {
  if (!process.env.NEXT_PUBLIC_MAILCHIMP_U || !process.env.NEXT_PUBLIC_MAILCHIMP_ID) {
    throw new Error('Cannot get mailchimp information.')
  }

  return `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`
}
