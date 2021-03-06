import { Field, FormikProps } from 'formik'
import styles from './PhoneNumberInput.module.css'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'

type Props = {
  formik: FormikProps<SignupFormikForm> | FormikProps<ZortSignupFormikForm>
}

export type SignupFormikForm = {
  fullName: string
  country: string
  phoneNumber: string
  email: string
}

export type ZortSignupFormikForm = {
  fullName: string
  country: string
  phoneNumber: string
  email: string
  merchantName: string
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
