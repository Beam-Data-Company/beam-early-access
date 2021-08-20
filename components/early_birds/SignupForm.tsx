import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import styles from './SignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'
import SuccessModal from '../SuccessModal'
import PhoneNumberInput from './PhoneNumberInput'
import ErrorStateMessage from './ErrorStateMessage'
import Text from '../Text'
import Spacer from '../Spacer'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const FormExtractSchema = Yup.object({
  fullName: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  country: Yup.string().oneOf(PHONE_COUNTRY_CODE).required('Required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Please enter a valid phone number')
    .min(8, 'Must be between 8-10 characters')
    .max(10, 'Must be between 8-10 characters')
    .required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('/api/subscribe', values)
            setSuccessModalVisible(true)
            resetForm()
            setFailMessage('')
          } catch (error: any) {
            setFailMessage(error.response.data.error)
          }
          setSubmitting(false)
        }}
      >
        {(props) => (
          <Form className={styles.form_container}>
            <div className={styles.field_error_wrapper}>
              <Field
                name="fullName"
                placeholder="Full Name"
                className={classNames(
                  styles.input_field,
                  props.errors.fullName &&
                    props.touched.fullName &&
                    styles.error_input_field
                )}
                disabled={props.isSubmitting}
              />
              {props.errors.fullName && props.touched.fullName ? (
                <ErrorStateMessage name="fullName" />
              ) : (
                <Spacer height={20} />
              )}
            </div>

            <div className={styles.field_error_wrapper}>
              <PhoneNumberInput renderProps={props} />
              {props.errors.phoneNumber && props.touched.phoneNumber ? (
                <ErrorStateMessage name="phoneNumber" />
              ) : (
                <Spacer height={20} />
              )}
            </div>

            <div className={styles.field_error_wrapper}>
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
                disabled={props.isSubmitting}
              />
              {props.errors.email && props.touched.email ? (
                <ErrorStateMessage name="email" />
              ) : (
                <Spacer height={20} />
              )}
            </div>

            <div
              className={classNames(
                styles.field_error_wrapper,
                styles.button_error_wrapper
              )}
            >
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
              <div className={styles.fail_message}>
                <Text color="#f65129" size={18}>
                  {failMessage}
                </Text>
              </div>
            </div>
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
