import React from 'react'
import Head from 'next/head'
import { PAGE_CONSTANTS } from '@/lib/constants'

export const Seo: React.FC<{ title?: string }> = ({ title }) => {
  const pageTitle = `${PAGE_CONSTANTS.APP_NAME} ${title ? ` - ${title}` : ''}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel='icon' href='/images/favicon.ico' />
      <link rel='shortcut icon' href='/images/favicon.ico' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  )
}
