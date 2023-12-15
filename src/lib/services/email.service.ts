import { Resend } from 'resend'

import { EmailTemplate } from '@/components/email-templates'
import { ContactFormPayload } from '@/containers/forms/contact-form/contact-form.payload'
import { PAGE_CONSTANTS } from '../constants'

class EmailService {
  private resend: Resend

  constructor() {
    this.resend = new Resend(process.env.RESEND_EMAIL_API_KEY)
  }

  async sendEmailToTechCoserve(data: ContactFormPayload) {
    await this.resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: [process.env.RESEND_EMAIL],
      subject: 'Nuevo Email de contacto',
      react: EmailTemplate(data),
    })
  }

  async sendEmailToCustomer(data: ContactFormPayload) {
    await this.resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: [data.email],
      subject: `Contact: ${PAGE_CONSTANTS.APP_NAME}`,
      react: EmailTemplate({ ...data, isClient: true }),
    })
  }
}

const emailService = new EmailService()
export { emailService }
