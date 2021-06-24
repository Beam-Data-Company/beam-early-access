import React, { useState }from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

type Props = {
  status: string | null;
  message: string | Error | null;
  onValidated: (obj: {EMAIL: string;}) => void;
};

const CustomForm = ({ status, message, onValidated }: Props) => {
  
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target){
      setEmail(event.target.value);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert('An email was submitted') 
    event.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email,
    });
  }

  console.log(email);
  console.log(status);
  console.log(message);

  return (
    <form className="mc__form" onSubmit={(event) => handleSubmit(event)}>
      <h3 className="mc__title">Get early access for Enterprise</h3>      
      <div className="mc__field-container">
        <input type="email" value={email} placeholder="your@email.com" onChange={(event) => handleChange(event)} required/>
      </div>
      <input type='submit' value="Submit"/>
    </form>
  );
};


const MailchimpFormContainer = () => {

  const postUrl = `https://beamdata.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;
  
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;