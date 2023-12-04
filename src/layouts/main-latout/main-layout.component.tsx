import React from 'react'
import { Footer, Header } from '@/components/layouts'

const MainLayout: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <main>
        <div className='main-container'>
          {children}
        </div>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export { MainLayout }
