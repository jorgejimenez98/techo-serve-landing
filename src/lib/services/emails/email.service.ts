import { Resend } from 'resend'
import EmailTemplate, { EmailTemplateProps } from './email.template'

class EmailService {
  private resend: Resend

  constructor() {
    this.resend = new Resend(process.env.RESEND_EMAIL_API_KEY)
  }

  async sendEmailToTechCoserve() {
    await this.resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: [process.env.RESEND_EMAIL],
      subject: 'Nuevo Email de contacto',
      react: EmailTemplate({ message: '', name: '' }),
    })
  }

  async sendEmailToCustomer(data: EmailTemplateProps) {
    await this.resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: [data.email],
      subject: 'Nuevo Email de contacto',
      react: EmailTemplate({ message: 'Test', name: '' }),
    })
  }
}
const emailService = new EmailService()
export default emailService
