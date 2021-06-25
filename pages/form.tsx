import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

type Props = {
  status: string | null;
  message: string | Error | null;
  onValidated: (obj: { EMAIL: string }) => void;
};

function CustomForm(props: Props) {
  const [email, setEmail] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    email &&
      props.onValidated({
        EMAIL: email,
      });
  }

  return (
    <form className="mc__form" onSubmit={handleSubmit}>
      <h3 className="mc__title">Get early access for Enterprise</h3>
      <div className="mc__field-container">
        <input
          type="email"
          value={email}
          placeholder="your@email.com"
          onChange={handleChange}
          required
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

function MailchimpFormContainer() {
  const postUrl = `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

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
  );
}

export default MailchimpFormContainer;
