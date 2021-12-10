import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import styles from './SignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'
import SuccessModal from '../SuccessModal'
import PhoneNumberInput from './ZortPhoneNumberInput'
import ErrorStateMessage from './ErrorStateMessage'
import Text from '../Text'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignUpFormSchema = Yup.object({
  merchantName: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  fullName: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  country: Yup.string().oneOf(PHONE_COUNTRY_CODE).required('Required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Please enter a valid phone number')
    .min(8, 'Must be between 8-10 characters')
    .max(10, 'Must be between 8-10 characters')
    .required('Required'),
})

export default function SignupForm() {
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <>
      <Formik
        initialValues={{
          merchantName: '',
          email: '',
          fullName: '',
          country: '+66',
          phoneNumber: '',
        }}
        validationSchema={SignUpFormSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('/api/subscribeZort', values)
            setSuccessModalVisible(true)
            resetForm()
            setErrorMessage('')
          } catch (error: any) {
            setErrorMessage(error.response.data.error)
          }
          setSubmitting(false)
        }}
      >
        {(formik) => (
          <Form className={styles.form_container}>
            <InputFieldWrapper>
              <Field
                name="merchantName"
                placeholder="Merchant Name"
                className={classNames(
                  styles.input_field,
                  formik.errors.merchantName &&
                    formik.touched.merchantName &&
                    styles.error_input_field
                )}
                disabled={formik.isSubmitting}
              />
              {formik.errors.merchantName && formik.touched.merchantName && (
                <ErrorStateMessage name="merchantName" />
              )}
            </InputFieldWrapper>

            <InputFieldWrapper>
              <Field
                name="email"
                type="email"
                placeholder="ZORT Email"
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
                name="fullName"
                placeholder="Full Name"
                className={classNames(
                  styles.input_field,
                  formik.errors.fullName &&
                    formik.touched.fullName &&
                    styles.error_input_field
                )}
                disabled={formik.isSubmitting}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <ErrorStateMessage name="fullName" />
              )}
            </InputFieldWrapper>

            <InputFieldWrapper>
              <PhoneNumberInput formik={formik} />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <ErrorStateMessage name="phoneNumber" />
              )}
            </InputFieldWrapper>

            <InputFieldWrapper className={styles.button_error_wrapper}>
              <button
                type="submit"
                className={classNames(
                  styles.submit_button,
                  formik.isSubmitting && styles.submit_button_submitting
                )}
                disabled={formik.isSubmitting}
              >
                Register Now
              </button>
              {errorMessage && (
                <Text color="#f65129" size={18}>
                  {errorMessage}
                </Text>
              )}
            </InputFieldWrapper>
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
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={classNames(styles.input_field_wrapper, props.className)}>
      {props.children}
    </div>
  )
}
