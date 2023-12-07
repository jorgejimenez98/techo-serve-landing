import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children, className, ...restProps }) => {

  const CARD_CLASSNAMES = [
    'card bg-base-100 w-full shadow-xl',
    className
  ].join(' ')

  return (
    <div className={CARD_CLASSNAMES} {...restProps}>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}
