import { Field, FormikProps } from 'formik'
import styles from './PhoneNumberInput.module.css'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'

type Props = {
  formik: //for SignupForm
  | FormikProps<{
        fullName: string
        country: string
        phoneNumber: string
        email: string
      }>
    //for ZortSignupForm
    | FormikProps<{
        merchantName: string
        email: string
        fullName: string
        country: string
        phoneNumber: string
      }>
}

export default function PhoneNumberInput(props: Props) {
  const renderCountryCode = () => {
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
          props.formik.errors.phoneNumber &&
            props.formik.touched.phoneNumber &&
            styles.error_input_field
        )}
        disabled={props.formik.isSubmitting}
      />
      <Field
        name="country"
        as="select"
        className={classNames(
          styles.country,
          props.formik.errors.phoneNumber &&
            props.formik.touched.phoneNumber &&
            styles.error_input_field
        )}
        disabled={props.formik.isSubmitting}
      >
        {renderCountryCode()}
      </Field>
    </div>
  )
}
