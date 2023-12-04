import React from 'react'
import { Logo } from '@/components/common'
import { Text } from '@/components/ui'
import { useTranslation } from 'next-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className='p-10 text-base-content'>
      <div className='footer main-container'>
        <aside>
          <Logo align='start' />
          <Text type='muted'>
            {t('Footer.Text', { year: new Date().getFullYear() })}
          </Text>
        </aside>
        <nav>
          <header className='footer-title'>
            {t('Footer.Services')}
          </header>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
        </nav>
        <nav>
          <header className='footer-title'>
            {t('Footer.Links')}
          </header>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
        </nav>
        <nav>
          <header className='footer-title'>
            {t('Footer.Legal')}
          </header>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>Lorem ipsum</Text>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
