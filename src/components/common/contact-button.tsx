import React from 'react'
import { Button, Link } from '../ui'
import { useTranslation } from 'next-i18next'
import { PAGE_URLS } from '@/lib/constants'

const ContactButton: React.FC<{ variant: 'outline' | 'primary', className?: string }> = (props) => {
  const { t } = useTranslation()

  return (
    <Link to={PAGE_URLS.CONTACT} className={props.className}>
      <Button icon='mail_outline' variant={props.variant}>
        {t('Services.ContactUs')}
      </Button>
    </Link>
  )
}

export { ContactButton }
