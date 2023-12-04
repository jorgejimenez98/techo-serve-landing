import React from 'react'
import { Dropdown } from '../ui'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import type { DropdownItem } from '../ui/dropdown'
import { SPAIN, USA } from '@/assets/images'

const LanguageSelector: React.FC = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const { language: currentLanguage } = i18n

  const languages: DropdownItem[] = [
    { id: 'en', text: 'English', image: USA },
    { id: 'es', text: 'Español', image: SPAIN }
  ]

  const changeLanguage = async (newLanguage: string) => {
    if (currentLanguage === newLanguage) return
    document.documentElement.setAttribute('lang', newLanguage)
    await i18n.changeLanguage(newLanguage)
    router.push(router.asPath, undefined, { locale: newLanguage })
  }

  return (
    <Dropdown
      value={currentLanguage}
      options={languages}
      handleOptionClick={changeLanguage}
    />
  )
}

export { LanguageSelector }
