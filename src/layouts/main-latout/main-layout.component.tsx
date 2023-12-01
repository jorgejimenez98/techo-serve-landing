import React from 'react'

const MainLayout: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  return (
    <React.Fragment>
      Header Here...

      Scroll Top Layouts

      <main>
        {children}
      </main>

      Footer Here...
    </React.Fragment>
  )
}

export { MainLayout }