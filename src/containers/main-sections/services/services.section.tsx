import React from 'react'
import { useTranslation } from 'next-i18next'

import ServiceCardItem from './service-card-item'

import { Flex } from '@/components/layouts'
import { ContactButton, InvisibleLink, Subtitle } from '@/components/common'
import { ServiceItem } from '@/lib/types'
import { Divider, Text } from '@/components/ui'

const Services: React.FC = () => {
  const { t } = useTranslation()

  const serviceList: ServiceItem[] = [
    { icon: 'visibility', title: t('Services.Item1Title'), subtitle: t('Services.Item1Description') },
    { icon: 'gesture', title: t('Services.Item2Title'), subtitle: t('Services.Item2Description') },
    { icon: 'find_replace', title: t('Services.Item3Title'), subtitle: t('Services.Item3Description') },
    { icon: 'search', title: t('Services.Item4Title'), subtitle: t('Services.Item4Description') },
    { icon: 'build', title: t('Services.Item5Title'), subtitle: t('Services.Item5Description') },
  ]

  return <>
    <InvisibleLink id='services' />

    <Divider className='mb-10'>
      <Text
        size='3xl'
        weigth='bold'
        variant={'p'}
        className='leading-normal mb-2 text-black font-bold'
      >
        {t('Services.Title')}
      </Text>
    </Divider>

    <Subtitle
      text={t('Services.Subtitle')}
      className='mb-12'
    />

    <Flex wrap='wrap' className='px-10  text-center'>
      {serviceList.map((service, idx) => (
        <ServiceCardItem
          key={idx}
          serviceItem={service}
        />
      ))}
    </Flex>

    <Subtitle text={t('Services.Contact')} />

    <Flex justify='center' className='mt-5 mb-10'>
      <ContactButton variant='primary' />
    </Flex>
  </>
}

export { Services }
