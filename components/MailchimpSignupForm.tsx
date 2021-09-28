import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import styles from './MailchimpSignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import SuccessModal from './SuccessModal'
import ErrorStateMessage from './early_birds/ErrorStateMessage'
import Text from './Text'
import Loading from './Loading'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignUpFormSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Please enter a valid phone number')
    .min(8, 'Must be between 8-10 characters')
    .max(10, 'Must be between 8-10 characters')
    .required('Required'),
})

export default function MailchimpSignupForm() {
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          phoneNumber: '',
        }}
        validationSchema={SignUpFormSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('/api/subscribeEarlyAccess', values)
            setSuccessModalVisible(true)
            resetForm()
            setErrorMessage('')
          } catch (error) {
            setErrorMessage(error.response.data.error)
          }
          setSubmitting(false)
        }}
      >
        {(formik) => (
          <Form className={styles.form_container}>
            <InputFieldWrapper>
              <Field
                name="email"
                type="email"
                placeholder="Your work email address"
                className={classNames(
                  styles.input_field,
                  formik.errors.email &&
                  formik.touched.email &&
                  styles.error_input_field
                )}
                disabled={formik.isSubmitting}
              />
              {formik.errors.email && formik.touched.email && (
                <ErrorStateMessage name="email" />
              )}
            </InputFieldWrapper>

            <InputFieldWrapper>
              <Field
                name="phoneNumber"
                type="tel"
                placeholder="Your phone number"
                className={classNames(
                  styles.input_field,
                  formik.errors.phoneNumber &&
                  formik.touched.phoneNumber &&
                  styles.error_input_field
                )}
                disabled={formik.isSubmitting}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <ErrorStateMessage name="phoneNumber" />
              )}
            </InputFieldWrapper>

            <button
              type="submit"
              className={styles.submit_button}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? <Loading /> : 'Get Access'}
            </button>
            {errorMessage && (
              <div className={styles.error_container}>
                <Text color="#ffffff" size={13}>
                  {errorMessage}
                </Text>
              </div>
            )}
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

function InputFieldWrapper(props: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.input_field_wrapper}>
      {props.children}
    </div>
  )
}
