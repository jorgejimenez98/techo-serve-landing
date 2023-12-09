import React from 'react'
import { Link, Menu } from '@/components/ui'
import { PAGE_CONSTANTS } from '@/lib/constants'
import { Sidebar } from './Sidebar'
import { HEADER_ITEMS } from './header.items'
import { useTranslation } from 'next-i18next'
import { LanguageSelector } from '@/components/common'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className='app-header'>
      <nav className='navbar main-container relative'>
        <div className='navbar-start'>
          {/* Mobile Sidebar */}
          <Sidebar />

          <Link
            to={'/'}
            size='xl'
            type='primary'
            weigth='extrabold'
            className='btn btn-ghost ml-5 lg:ml-0'
          >
            {PAGE_CONSTANTS.APP_NAME}
          </Link>
        </div>

        <div className='navbar-end w-70-p'>
          <Menu
            className='hidden lg:flex'
            direction='horizontal'
            size='lg'
            displayIcon={false}
            items={HEADER_ITEMS(t)}
          />

          <LanguageSelector />
        </div>
      </nav>
    </header>
  )
}

export default Header
