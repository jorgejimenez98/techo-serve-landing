import React from 'react'
import { getLoremText } from '@/lib/services'
import { Logo } from '@/components/common'
import { PAGE_CONSTANTS } from '@/lib/constants'
import { Text } from '@/components/ui'

const Footer: React.FC = () => {

  return (
    <footer className='p-10 bg-base-200 text-base-content'>
      <div className='footer main-container'>
        <aside>
          <Logo align='start'/>
          <Text type='muted'>{PAGE_CONSTANTS.COPYRIGTH_TEXT}</Text>
        </aside>
        <nav>
          <header className='footer-title'>Services</header>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
        </nav>
        <nav>
          <header className='footer-title'>Company</header>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
        </nav>
        <nav>
          <header className='footer-title'>Legal</header>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
          <a className='link link-hover'>
            <Text type='destructive'>{getLoremText()}</Text>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
