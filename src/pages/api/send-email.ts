
import { ContactFormPayload } from '@/containers/forms/contact-form/contact-form.payload'
import { emailService } from '@/lib/services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }
  const payload = req.body as ContactFormPayload

  try {
    await emailService.sendEmailToTechCoserve(payload)
    await emailService.sendEmailToCustomer(payload)
    res.status(200).json({ success: true, message: 'Email sended' })
  } catch (error) {
    console.error('Error on send email:', error)
    res.status(500).json({ success: false })
  }
}
