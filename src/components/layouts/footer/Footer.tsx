import React from 'react'
import { useTranslation } from 'next-i18next'
import { Link, Text } from '@/components/ui'
import { Logo, SocialMedia } from '@/components/common'
import { PAGE_URLS } from '@/lib/constants'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const navs = [
    {
      title: t('Footer.Company'),
      links: [
        { url: PAGE_URLS.SERVICES, text: t('Footer.Services') },
        { url: PAGE_URLS.ABOUT_US, text: t('Header.AboutUs') },
      ]
    },
    {
      title: t('Footer.Links'),
      links: [
        { url: PAGE_URLS.CONTACT, text: t('Header.Contact') },
        { url: PAGE_URLS.COOKIES_POLICY, text: t('Footer.Cookies') },
        { url: PAGE_URLS.TERMS_POLICY, text: t('Footer.Terms') }
      ]
    }
  ]

  return (
    <footer className='p-10 text-base-content'>
      <div className='footer main-container'>
        <aside>
          <Logo />
          <Text type='muted'>
            {t('Footer.Text', { year: new Date().getFullYear() })}
          </Text>
        </aside>

        {/* Navs */}
        {navs.map((nav, index) => (
          <div key={index}>
            <div className='footer-title'>
              {nav.title}
            </div>

            {/* Links */}
            {nav.links.map((link, idx) => (
              <Link
                className='link link-hover'
                key={idx}
                to={link.url}
              >
                {link.text}
              </Link>
            ))}
          </div>
        ))}

        {/* Social Media */}
        <SocialMedia />
      </div>
    </footer>
  )
}

export default Footer
