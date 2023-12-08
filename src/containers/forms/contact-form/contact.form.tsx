import React from 'react'
import { useTranslation } from 'next-i18next'
import { Formik, Form, FormikHelpers } from 'formik'

import { Button, Divider } from '@/components/ui'
import { Col, Flex } from '@/components/layouts'
import { TextAreaInput, TextInput } from '@/components/ui/fieds'

import { ContactFormPayload } from './contact-form.payload'
import { initialValues, validationSchema } from './contact-form.schema'

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
            label={t('Contact.Name')}
            placeholder={t('Contact.NamePlaceholder')}
            className='mb-4 lg:mr-2'
            autoFocus
          />
          <TextInput
            name='email'
            label={t('Contact.Email')}
            placeholder={t('Contact.EmailPlaceholder')}
            className='mb-4 lg:ml-2'
          />
        </Col>

        <TextAreaInput
          name='message'
          label={t('Contact.Message')}
          placeholder={t('Contact.MessagePlaceholder')}
          className='mb-4'
        />

        <Divider />

        <Flex justify='end'>
          <Button type='submit' icon='mail_outline'>
            {t('Contact.Send')}
          </Button>
        </Flex>
      </Form>
    </Formik>
  </>
}
