import React, { useRef, useState } from 'react'
import { Icon, Menu } from '@/components/ui'
import { HEADER_ITEMS } from './header.items'
import { Logo } from '@/components/common'
import { useTranslation } from 'next-i18next'

export const Sidebar: React.FC = () => {
  const { t } = useTranslation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const touchStartX = useRef<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchCurrentX = e.touches[0].clientX
    const touchDeltaX = touchCurrentX - touchStartX.current
    if (touchDeltaX > 50) setIsSidebarOpen(true)
  }

  const handleTouchEnd = () => {
    touchStartX.current = 0
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div
      className={`drawer lg:hidden z-50 ${isSidebarOpen ? 'open' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Hidden Drawer */}
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />

      {/* Drawer Button */}
      <div className='drawer-content'>
        <label htmlFor='my-drawer'>
          <Icon name='menu' className='cursor-pointer' onClick={toggleSidebar} />
        </label>
      </div>

      {/* Drawer Content */}
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
          onClick={toggleSidebar}
        />

        {/* Sidebar content here */}
        <div className='bg-app-ligth min-h-full p-4'>
          <Logo align='start' showDescription={false} className='mb-3' />

          <Menu direction='vertical' items={HEADER_ITEMS(t)} />
        </div>
      </div>
    </div>
  )
}
