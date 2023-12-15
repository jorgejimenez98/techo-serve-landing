import React from 'react'

import type { ContactFormPayload } from '@/containers/forms/contact-form/contact-form.payload'

export interface EmailTemplateProps extends ContactFormPayload {
  isClient?: boolean
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => {
  return <>
    <div>{name}</div>
    <div>{email}</div>
    <div>{message}</div>
  </>
}

export { EmailTemplate }
