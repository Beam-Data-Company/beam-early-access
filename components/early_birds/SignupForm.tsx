import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './SignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'
import SuccessModal from '../SuccessModal'
import PhoneNumberInput from './PhoneNumberInput'

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
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [failMessage, setFailMessage] = useState('')

  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          country: '+66',
          phoneNumber: '',
          email: '',
        }}
        validationSchema={FormExtractSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post('/api/subscribe', values)
            .then(function (response) {
              console.log(response)
              setSuccessModalVisible(true)
              resetForm()
              setFailMessage('')
            })
            .catch(function (error) {
              console.log(error)
              setFailMessage(error.response.data.error)
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
              className={classNames(
                styles.input_field,
                props.errors.fullName &&
                  props.touched.fullName &&
                  styles.error_input_field
              )}
            />
            <div className={styles.error_message}>
              <ErrorMessage name="fullName" />
            </div>

            <PhoneNumberInput renderProps={props} />
            <div className={styles.error_message}>
              <ErrorMessage name="phoneNumber" />
            </div>

            <Field
              name="email"
              type="email"
              placeholder="Work Email"
              className={classNames(
                styles.input_field,
                props.errors.email &&
                  props.touched.email &&
                  styles.error_input_field
              )}
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
            <div className={styles.fail_message}>{failMessage}</div>
          </Form>
        )}
      </Formik>
      <SuccessModal
        isOpen={successModalVisible}
        closeModal={() => setSuccessModalVisible(false)}
      />
    </>
  )
}
