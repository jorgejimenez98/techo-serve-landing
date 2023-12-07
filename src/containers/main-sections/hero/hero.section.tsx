/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from 'next-i18next'

import { Flex } from '@/components/layouts'
import { Text } from '@/components/ui'
import { Logo } from '@/components/common'
import { useWindowSize } from '@/hooks'

export const HeroSection: React.FC = () => {
  const { isMobile } = useWindowSize()
  const { t } = useTranslation()

  return (
    <Flex direction='column' className='px-3 py-10 lg:py-28 gap-12 lg:flex-row'>
      <Flex direction='column' className='space-y-5 max-w-xl text-center lg:text-start'>

        <Text variant='h1' size='5xl' className='text-gray-800 sm:text-5xl font-extrabold'>
          {t('Hero.Title')}
        </Text>

        <Text variant='span' size='lg'>
          {t('Hero.Subtitle')}
        </Text>

        <Flex>
          <Logo
            align={isMobile ? 'center' : 'start'}
            className='mt-5'
          />
        </Flex>
      </Flex>

      <Flex>
        <img
          src='/images/carousel/picture-1.webp'
          className='max-w-xl rounded-xl shadow-xl'
          width={'100%'}
          alt='main-image'
        />
      </Flex>
    </Flex>
  )
}
