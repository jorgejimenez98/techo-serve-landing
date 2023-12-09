import React from 'react'
import { useTranslation } from 'next-i18next'

import { Divider, Text } from '@/components/ui'
import { ContactButton, Logo } from '@/components/common'
import { AboutUsItemType } from '@/lib/types'
import { AboutUsItem } from './about-us-item'

const AboutUsPageContent: React.FC = () => {
  const { t } = useTranslation()

  const items: AboutUsItemType[] = [
    {
      title: t('AboutUs.ItemTitle1'),
      description: t('AboutUs.ItemDescription1'),
      imageSrc: '/images/carousel/picture-1.webp',
    },
    {
      title: t('AboutUs.ItemTitle2'),
      description: t('AboutUs.ItemDescription2'),
      imageSrc: '/images/carousel/picture-3.webp',
      reverse: true,
      maskPosition: 'bottom'
    },
    {
      title: t('AboutUs.ItemTitle3'),
      description: t('AboutUs.ItemDescription3'),
      imageSrc: '/images/carousel/picture-4.webp',
    },
    {
      title: t('AboutUs.ItemTitle4'),
      description: t('AboutUs.ItemDescription4'),
      imageSrc: '/images/carousel/picture-5.webp',
      reverse: true,
      maskPosition: 'bottom'
    },
    {
      title: t('AboutUs.ItemTitle5'),
      description: t('AboutUs.ItemDescription5'),
      imageSrc: '/images/carousel/picture-6.webp',
    },
    {
      title: t('AboutUs.ItemTitle6'),
      description: t('AboutUs.ItemDescription6'),
      imageSrc: '/images/carousel/picture-7.webp',
      reverse: true,
      maskPosition: 'bottom'
    },
  ]

  return <>
    {/* Title */}
    <Text
      size='3xl'
      variant='h1'
      className='font-bold'
    >
      {t('Header.AboutUs')}
    </Text>
    {/* Logo */}
    <Logo className='mt-5' />

    {/* Subtitle */}
    <Text className='mt-4' size='xl'>
      {t('AboutUs.Welcome')}
    </Text>
    <Text className='mt-4' size='lg'>
      {t('AboutUs.Title')}
    </Text>

    <ContactButton
      variant='outline'
      className='mt-5'
    />

    <Divider className='my-10'>
      <Text
        variant='h1'
        className='font-bold text-xl lg:text-3xl'
      >
        {t('AboutUs.Services')}
      </Text>
    </Divider>

    {/* Items */}
    {items.map((item, idx) => (
      <AboutUsItem
        key={idx}
        item={item}
      />
    ))}
  </>
}

export { AboutUsPageContent }
