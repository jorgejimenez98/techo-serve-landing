import React from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { useTranslation } from 'next-i18next'
import { ContactFormPayload } from './contact-form.payload'
import { initialValues, validationSchema } from './contact-form.schema'
import { Col } from '@/components/layouts'
import { TextAreaInput, TextInput } from '@/components/ui/fieds'

export const ContactForm: React.FC = () => {
  const { t } = useTranslation()

  const onSubmit = (
    payload: ContactFormPayload,
    { resetForm }: FormikHelpers<ContactFormPayload>
  ) => {
    // eslint-disable-next-line no-console
    console.log({ payload })
    resetForm()
  }

  return <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(t)}
      onSubmit={onSubmit}
    >
      <Form>
        <Col>
          <TextInput
            name='name'
            label={t('Name')}
            placeholder={t('Enter your name...')}
            className='mb-4 lg:mr-2'
          />
          <TextInput
            name='email'
            label={t('Email')}
            placeholder={t('Enter your email...')}
            className='mb-4 lg:ml-2'
          />
        </Col>

        <TextAreaInput
          name='message'
          label={t('Message')}
          placeholder={t('Enter your message...')}
          className='mb-4'
        />

        <div className='flex justify-end'>
          <button
            type='submit'
            className={`
            btn btn-primary w-full
            lg:w-40`}
          >
            {t('Send email')}
          </button>
        </div>
      </Form>
    </Formik>

  </>
}
