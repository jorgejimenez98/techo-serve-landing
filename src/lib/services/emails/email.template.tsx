import React from 'react'

export interface EmailTemplateProps {
  name: string
  email?: string
  message: string
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  )
}

export default EmailTemplate
