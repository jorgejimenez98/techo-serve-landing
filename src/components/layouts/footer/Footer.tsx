import React from 'react'
import { Logo } from '@/components/common'
import { PAGE_CONSTANTS } from '@/lib/constants'
import { Text } from '@/components/ui'

const Footer: React.FC = () => {
  return (
    <footer className='p-10 text-base-content'>
      <div className='footer main-container'>
        <aside>
          <Logo align='start' />
          <Text type='muted'>{PAGE_CONSTANTS.COPYRIGTH_TEXT}</Text>
        </aside>
        <nav>
          <header className='footer-title'>Services</header>
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
          <header className='footer-title'>Company</header>
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
          <header className='footer-title'>Legal</header>
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
