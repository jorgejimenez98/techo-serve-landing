import React from 'react'
import { Footer, Header } from '@/components/layouts'
import { ScrollUpButton } from '@/components/common'

const MainLayout: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <ScrollUpButton />

      <main className='global-mask main-container'>
        {children}
      </main>

      <Footer />
    </React.Fragment>
  )
}

export { MainLayout }
