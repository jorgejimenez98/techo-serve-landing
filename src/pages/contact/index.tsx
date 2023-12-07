import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { i18n, useTranslation } from 'next-i18next'
import { isLocal } from '@/lib/utils'
import { Seo } from '@/components/common'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Card, Text } from '@/components/ui'
import { Flex } from '@/components/layouts'
import { ContactForm } from '@/containers/forms'

const ContactPage: NextPage = ()  => {
  const { t } = useTranslation()

  return <>
    <Seo title={t('Header.Contact')} />

    <Flex className='lg:mx-20'>
      <Card className='my-5 ml-5 mr-5 lg:my-20 lg:mx-28'>
        {/* Title */}
        <Flex justify='center' items='center' direction='column' className='gap-2 mb-5'>
          <Text type='muted' size='xl' className='uppercase'>
            {t('Contact')}
          </Text>

          <Text size='3xl' variant='h3' weigth='bold' className='text-center lg:text-start'>
            {t('Have any questions?')}
          </Text>

          <Text size='lg' variant='h4' className='text-center lg:text-start mt-4'>
            {t('Utiliza este formulario para contactar con TechCoserve y hacernos llegar cualquier duda o sugerencia. Te responderemos en las próximas 24 horas')}
          </Text>
        </Flex>

        {/* Form */}
        <ContactForm />
      </Card>
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

export default ContactPage
