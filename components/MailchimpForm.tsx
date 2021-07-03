import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'
import classNames from 'classnames'

import styles from '../components/MailchimpForm.module.css'
import Loading from './Loading'
import ThankyouModal from './ThankyouModal'

type Props = {
  status: 'success' | 'sending' | 'error' | null
  message: string | Error | null
  subscribeEmail: (data: EmailFormFields) => void
}

function EmailForm(props: Props) {
  const emailInput = useRef<HTMLInputElement | null>(null)

  const [email, setEmail] = useState('')
  const [inputError, setInputError] = useState(false)

  useEffect(() => {
    if (props.status === 'success') {
      emailInput && emailInput.current?.focus()

      setEmail('')
    }

    emailInput && emailInput.current?.focus()
  }, [props.status])

  useEffect(() => {
    if (props.status === 'error') {
      setInputError(true)
    }
  }, [props.status])

  const isSending = useMemo(() => props.status === 'sending', [props.status])

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
    if (!inputError || !errorMessage) {
      return null
    }

    return <span className={styles.error_container}>{errorMessage}</span>
  }, [errorMessage, inputError])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      props.subscribeEmail({
        EMAIL: email,
      })
    },
    [email, props]
  )

  return (
    <div style={{ width: '100%' }}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <input
          ref={emailInput}
          className={classNames(
            styles.input,
            isSending && styles.inputDisabled,
            inputError && styles.inputError
          )}
          type="email"
          placeholder="Your work email address"
          onChange={(e) => {
            if (inputError) {
              setInputError(false)
            }

            setEmail(e.target.value)
          }}
          value={email}
          disabled={isSending}
          required
        />
        <button className={styles.button} type="submit" disabled={isSending}>
          {isSending ? <Loading /> : 'Get Access \u2192'}
        </button>
      </form>
      {renderErrorMessage()}
    </div>
  )
}

export default function MailchimpForm() {
  const postUrl = getMailchimpUrl()

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <>
          <EmailForm
            status={status}
            message={message}
            subscribeEmail={subscribe}
          />
          {status === 'success' && <ThankyouModal />}
        </>
      )}
    />
  )
}

function getMailchimpUrl() {
  if (
    !process.env.NEXT_PUBLIC_MAILCHIMP_U ||
    !process.env.NEXT_PUBLIC_MAILCHIMP_ID
  ) {
    throw new Error('Cannot get mailchimp information.')
  }

  return `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`
}
