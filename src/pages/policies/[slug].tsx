import React from 'react'
import { useTranslation } from 'next-i18next'
import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import path from 'path'
import fs from 'fs'

import { MarkdownReader, Seo } from '@/components/common'
import { htmlService } from '@/lib/services'

interface PolicyPageProps {
  content: string
  slug: string
}

const PolicyPage: NextPage<PolicyPageProps> = ({ content, slug }) => {
  const { t } = useTranslation()

  const title = {
    terms: t('Footer.Terms'),
    cookies: t('Footer.Cookies')
  }[slug]

  return <>
    <Seo title={title} />
    <MarkdownReader content={content} />
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  // Obtener el slug de la URL
  const { slug } = query

  if (!['terms', 'cookies'].includes(String(slug))) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }

  /* Get Data */
  const fileDirectory = `src/assets/content/${String(slug)}/${locale}.md`
  const filePath = path.join(process.cwd(), fileDirectory)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const content = await htmlService.getHtmlFromMdFile(fileContent)

  // Pasar el slug como prop al componente
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      content,
      slug
    }
  }
}

export default PolicyPage
