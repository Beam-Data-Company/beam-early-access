import { Field, ErrorMessage } from 'formik'
import styles from './PhoneNumberInput.module.css'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'

export default function SignupForm(props) {

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
          styles.error_input_field)}
      />
      <Field name="country" as="select" className={styles.country_select}>
        {createCountryCodeOptions()}
      </Field>
    </div>
  )
}
