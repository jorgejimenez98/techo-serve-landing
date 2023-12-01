import React from 'react'
import { Footer, Header } from '@/components/layouts'

const MainLayout: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <main className='main-container'>
        {children}
      </main>

      <Footer />
    </React.Fragment>
  )
}

export { MainLayout }
