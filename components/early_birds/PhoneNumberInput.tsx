import { Field, FormikProps } from 'formik'
import styles from './PhoneNumberInput.module.css'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'

type Props = {
 renderProps: FormikProps<{
    fullName: string;
    country: string;
    phoneNumber: string;
    email: string;
  }>
}

export default function SignupForm( props : Props) {

  const createCountryCodeOptions = () => {
    return PHONE_COUNTRY_CODE.map((code) => {
      return (
        <option value={code} key={code}>
          {code}
        </option>
      )
    })
  }

  return (
    <div className={classNames(styles.phone_number_container)}>
      <Field
        name="phoneNumber"
        placeholder="098 000 0000"
        className={classNames(
          styles.phone_input,
          props.renderProps.errors.phoneNumber && props.renderProps.touched.phoneNumber && styles.error_input_field)}
      />
      <Field 
        name="country" 
        as="select"
        className={classNames(
          styles.country,
          props.renderProps.errors.phoneNumber && props.renderProps.touched.phoneNumber && styles.error_input_field)}    
      >
        {createCountryCodeOptions()}
      </Field>
    </div>
  )
}
