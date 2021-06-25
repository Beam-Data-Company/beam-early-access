import React, { useState, useEffect } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

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
    <form className="mc__form" onSubmit={handleSubmit}>
      <h3 className="mc__title">
        {props.status === 'success'
          ? 'Success!'
          : 'Get early access for Enterprise'}
      </h3>

      {props.status === 'sending' && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}

      {props.status === 'error' && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: String(props.message) }}
        />
      )}

      {props.status === 'success' && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: String(props.message) }}
        />
      )}

      {props.status !== 'success' ? (
        <div className="mc__field-container">
          <input
            type="email"
            value={email}
            placeholder="your@email.com"
            onChange={handleChange}
            style={{ fontFamily: 'Lexend Deca' }}
            required
          />
        </div>
      ) : null}

      {props.status !== 'success' ? (
        <input
          value="Submit"
          type="submit"
          style={{ fontFamily: 'Lexend Deca' }}
        />
      ) : (
        <></>
      )}
    </form>
  )
}

function MailchimpFormContainer() {
  const postUrl = `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={subscribe}
          />
        )}
      />
    </div>
  )
}

export default MailchimpFormContainer
