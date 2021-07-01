import React, { useState } from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'
import styles from '../components/MailchimpForm.module.css'
import Modal from './Modal'

type Props = {
  status: 'success' | 'sending' | 'error' | null
  message: string | Error | null
  onValidated: (data: EmailFormFields) => void
}

function CustomForm(props: Props) {
  const [email, setEmail] = useState('')

  // temporary state
  const [fcolor, setFColor] = useState('red')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onValidated({
      EMAIL: email,
    })
  }

  const changeToBlack = () => {
    setFColor('black')
  }

  const changeToRed = () => {
    setFColor('red')
  }

  return (
    <div className={styles.form_container}>
      <h1 className={styles.title}>Instant Checkout Early Access</h1>
      <h2 className={styles.description}>
        Get Beam Instant Checkout for your business. Experience the frictionless
        payment available for all platforms.
      </h2>

      {props.status === 'success' ? (
        <div>
          <div className={styles.alert}>Thank you!</div>
          <Modal />
        </div>
      ) : (
        <div>
          {props.status === 'sending' && (
            <div className={styles.alert}>sending...</div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            {props.status === null ? (
              <input
                type="email"
                value={email}
                placeholder="Your work email address"
                onChange={handleChange}
                className={styles.input}
                required
              />
            ) : null}

            {props.status === 'error' ? (
              <input
                type="email"
                value={email}
                placeholder="Your work email address"
                style={{ color: fcolor }}
                onChange={(event) => {
                  handleChange(event)
                  changeToBlack()
                }}
                className={styles.input}
                required
              />
            ) : null}

            {props.status === 'error' || props.status === null ? (
              <div>
                <input
                  // '&#xf061' is arrow symbol.
                  value="Get Access &#xf061;"
                  type="submit"
                  className={styles.button}
                  onClick={changeToRed}
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
