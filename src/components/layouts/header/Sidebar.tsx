import React from 'react'
import { Icon, Menu } from '@/components/ui'
import { HEADER_ITEMS } from './header.items'
import { Logo } from '@/components/common'
import { useTranslation } from 'next-i18next'

export const Sidebar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className='drawer lg:hidden'>
      {/* Hidden Drawer */}
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
      />

      {/* Drawer Button */}
      <div className='drawer-content'>
        <label htmlFor='my-drawer'>
          <Icon name='menu' className='cursor-pointer' />
        </label>
      </div>

      {/* Drawer Content */}
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        />

        {/* Sidebar content here */}
        <div className='bg-base-200 min-h-full p-4'>
          <Logo align='start' showDescription={false} className='mb-3' />

          <Menu
            direction='vertical'
            items={HEADER_ITEMS(t)}
          />
        </div>

      </div>
    </div>
  )
}

