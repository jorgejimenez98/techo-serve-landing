import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

import Cookies from 'js-cookie'

import { Button, Text } from '../ui'
import { COOKIES_CONSTANTS } from '@/lib/constants'
import { Flex } from '../layouts'
import { htmlService } from '@/lib/services'

const CookiesConsent: React.FC = () => {
  const { t } = useTranslation()
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false)
  const consentCookiesValue = Cookies.get(COOKIES_CONSTANTS.CONSENT)

  useEffect(() => {
    const handleCookieConsent = () => {
      if (!consentCookiesValue) {
        setIsBannerVisible(true)
        htmlService.disablePage()
      } else {
        setIsBannerVisible(false)
        htmlService.enablePage()
      }
    }

    handleCookieConsent()

    return () => htmlService.enablePage()
  }, [consentCookiesValue])

  const handleAccept = () => {
    Cookies.set(COOKIES_CONSTANTS.CONSENT, `${true}`, { expires: 345 })
    htmlService.enablePage()
    setIsBannerVisible(false)
  }

  if (!isBannerVisible) return null

  return (
    <Flex
      direction='column'
      items='center'
      justify='between'
      className='fixed bottom-0 left-0 w-full py-4 px-10 bg-blue-50 z-50 gap-2 lg:flex-row'
    >
      {/* Text */}
      <Text className='text-gray-800'>
        <div dangerouslySetInnerHTML={{ __html: t('Cookies.Text') }} />
      </Text>
      {/* Button */}
      <Button onClick={handleAccept}>
        {t('Cookies.Accept')}
      </Button>
    </Flex>
  )
}

export { CookiesConsent }
