import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './SignupForm.module.css'

const FormExtractSchema = Yup.object({
  fullName: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  country: Yup.string()
    .oneOf(['Thailand', 'Singapore', 'USA'])
    .required('Required'),
  phoneNumber: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
})

export default function SignupForm() {
  return (
    <Formik
      initialValues={{ fullName: '', country: '', phoneNumber: '', email: '' }}
      validationSchema={FormExtractSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
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
            <option value="Thailand">+66</option>
            <option value="Singapore">+65</option>
            <option value="USA">+1</option>
          </Field>
          <Field
            name="phoneNumber"
            placeholder="080 969 6462"
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

        <button type="submit" className={styles.submit_button}>
          Register now
        </button>
      </Form>
    </Formik>
  )
}
