import { MenuListItem } from '@/components/ui/menu'

export const HEADER_ITEMS = (): MenuListItem[] => [
  { to: '/services', text: 'Services', icon: 'build' },
  { to: '#about-us', text: 'Who are we?', icon: 'info' },
  { to: '/contact', text: 'Contact us', icon: 'mail_outline' },
]
