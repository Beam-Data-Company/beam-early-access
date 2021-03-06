import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import styles from './SignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import { PHONE_COUNTRY_CODE } from './phoneCountryCode'
import SuccessModal from '../SuccessModal'
import PhoneNumberInput from './PhoneNumberInput'
import ErrorStateMessage from './ErrorStateMessage'
import Text from '../Text'
import { PHONE_REG_EXP } from './phoneRegExp'
import FormContainer from './FormContainer'
import InputFieldWrapper from './InputFieldWrapper'
import { SignupFormikForm } from './PhoneNumberInput'

const SignUpFormSchema = Yup.object({
  fullName: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  country: Yup.string().oneOf(PHONE_COUNTRY_CODE).required('Required'),
  phoneNumber: Yup.string()
    .matches(PHONE_REG_EXP, 'Please enter a valid phone number')
    .min(8, 'Must be between 8-10 characters')
    .max(10, 'Must be between 8-10 characters')
    .required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
})

export default function SignupForm() {
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <>
      <Formik
        initialValues={
          {
            fullName: '',
            country: '+66',
            phoneNumber: '',
            email: '',
          } as SignupFormikForm
        }
        validationSchema={SignUpFormSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('/api/subscribe', values)
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
          <FormContainer className={styles.form_container}>
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
              <ErrorStateMessage name="fullName" />
            </InputFieldWrapper>

            <InputFieldWrapper>
              <PhoneNumberInput formik={formik} />
              <ErrorStateMessage name="phoneNumber" />
            </InputFieldWrapper>

            <InputFieldWrapper>
              <Field
                name="email"
                type="email"
                placeholder="Work Email"
                className={classNames(
                  styles.input_field,
                  formik.errors.email &&
                    formik.touched.email &&
                    styles.error_input_field
                )}
                disabled={formik.isSubmitting}
              />
              <ErrorStateMessage name="email" />
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
                Register now
              </button>
              {errorMessage && (
                <Text color="#f65129" size={18}>
                  {errorMessage}
                </Text>
              )}
            </InputFieldWrapper>
          </FormContainer>
        )}
      </Formik>
      <SuccessModal
        isOpen={successModalVisible}
        closeModal={() => setSuccessModalVisible(false)}
      />
    </>
  )
}
