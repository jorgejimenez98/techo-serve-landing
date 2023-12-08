import React, { ReactNode } from 'react'

const Col: React.FC<{ children: ReactNode }> = ({ children }) => {
  const childrens = React.Children.toArray(children)

  return (
    <div className='flex flex-col sm:flex-row sm:gap-2 lg:gap-0'>
      <div className='flex-1 w-full sm:w-1/2'>
        {childrens[0]}
      </div>
      <div className='flex-1 w-full sm:w-1/2'>
        {childrens[1]}
      </div>
    </div>
  )
}

export { Col }
