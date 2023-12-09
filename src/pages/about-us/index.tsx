import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { i18n, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { isLocal } from '@/lib/utils'
import { Seo } from '@/components/common'
import { AboutUsPageContent } from '@/containers'
import { Flex } from '@/components/layouts'

const AboutUsPage: NextPage = ()  => {
  const { t } = useTranslation()

  return <>
    <Seo title={t('Header.AboutUs')} />

    <Flex className='p-5 lg:p-16 fade' direction='column'>
      <AboutUsPageContent />
    </Flex>
  </>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (isLocal) await i18n?.reloadResources()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    }
  }
}

export default AboutUsPage
