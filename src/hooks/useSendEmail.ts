import axios from 'axios'
import { ContactFormPayload } from '@/containers/forms/contact-form/contact-form.payload'
import { UseMutationResult, useMutation } from '@tanstack/react-query'

const sendEmail = async (payload: ContactFormPayload): Promise<void> => {
  await axios.post('/api/send-email', payload, {
    headers: { 'Content-Type': 'application/json' }
  })
}

export const useSendEmail = (): UseMutationResult => {
  return useMutation({ mutationFn: sendEmail })
}
