import { TFunction } from 'next-i18next'
import { MenuListItem } from '@/components/ui/menu'

export const HEADER_ITEMS = (t: TFunction): MenuListItem[] => [
  { to: '/services', text: t('Header.Services'), icon: 'build' },
  { to: '#about-us', text: t('Header.AboutUs'), icon: 'info' },
  { to: '/contact', text: t('Header.Contact'), icon: 'mail_outline' },
]
