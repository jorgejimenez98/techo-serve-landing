import React from 'react'

interface InvisibleLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
}

const InvisibleLink: React.FC<InvisibleLinkProps> = ({ id, className, ...restProps }) => {

  const CLASS_NAME = [
    className,
    'h-0 w-0 relative bottom-28'
  ].join('')

  return <div id={id}  className={CLASS_NAME} {...restProps} />
}

export { InvisibleLink }
