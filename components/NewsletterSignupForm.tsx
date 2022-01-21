import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import styles from './NewsletterSignupForm.module.css'
import axios from 'axios'
import classNames from 'classnames'
import SuccessModal from './SuccessModal'
import ErrorStateMessage from './early_birds/ErrorStateMessage'
import Text from './Text'
import Loading from './Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SignUpFormSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
})

export default function NewsletterSignupForm() {
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SignUpFormSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('/api/subscribeNewsletter', values)
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
              <div className={styles.input_button_container}>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your e-mail here"
                  className={classNames(
                    styles.input_field,
                    formik.errors.email &&
                      formik.touched.email &&
                      styles.error_input_field
                  )}
                  disabled={formik.isSubmitting}
                />
                <button
                  type="submit"
                  className={styles.submit_button}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <Loading />
                  ) : (
                    <FontAwesomeIcon width="18px" icon={faArrowRight} />
                  )}
                </button>
              </div>
              {formik.errors.email && formik.touched.email && (
                <ErrorStateMessage name="email" />
              )}
            </InputFieldWrapper>

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

function InputFieldWrapper(props: { children: React.ReactNode }) {
  return <div className={styles.input_field_wrapper}>{props.children}</div>
}
