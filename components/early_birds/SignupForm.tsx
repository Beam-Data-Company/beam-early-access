import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './SignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'

const FormExtractSchema = Yup.object({
  fullName: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  country: Yup.string().oneOf(PHONE_COUNTRY_CODE).required('Required'),
  phoneNumber: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
})

export default function SignupForm() {
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
    <Formik
      initialValues={{
        fullName: '',
        country: '+66',
        phoneNumber: '',
        email: '',
      }}
      validationSchema={FormExtractSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post('/api/subscribe', values)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {(props) => (
        <Form className={styles.form_container}>
          <Field
            name="fullName"
            placeholder="Full Name"
            className={styles.input_field}
          />
          <div className={styles.error_message}>
            <ErrorMessage name="fullName" />
          </div>

          <div className={styles.phone_number_container}>
            <Field name="country" as="select" className={styles.country}>
              {createCountryCodeOptions()}
            </Field>
            <Field
              name="phoneNumber"
              placeholder="098 000 0000"
              className={styles.phone_input}
            />
          </div>
          <div className={styles.error_message}>
            <ErrorMessage name="phoneNumber" />
          </div>
          <Field
            name="email"
            type="email"
            placeholder="Work Email"
            className={styles.input_field}
          />
          <div className={styles.error_message}>
            <ErrorMessage name="email" />
          </div>

          <button
            type="submit"
            className={classNames(
              styles.submit_button,
              props.isSubmitting && styles.submit_button_submitting
            )}
            disabled={props.isSubmitting}
          >
            Register now
          </button>
        </Form>
      )}
    </Formik>
  )
}
