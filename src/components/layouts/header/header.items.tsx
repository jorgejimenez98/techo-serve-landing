import { TFunction } from 'next-i18next'
import { MenuListItem } from '@/components/ui/menu'
import { PAGE_URLS } from '@/lib/constants'

export const HEADER_ITEMS = (t: TFunction): MenuListItem[] => [
  { to: PAGE_URLS.SERVICES, text: t('Header.Services'), icon: 'build' },
  { to: PAGE_URLS.ABOUT_US, text: t('Header.AboutUs'), icon: 'info' },
  { to: PAGE_URLS.CONTACT, text: t('Header.Contact'), icon: 'mail_outline' },
]
