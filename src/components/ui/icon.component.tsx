import React from 'react'
import { ICON } from '@/lib/types'

interface IconProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
  > { name: ICON }

const Icon: React.FC<IconProps> = ({ name, className, ...restProps }) => {

  const CLASS_NAMES = [
    'material-symbols-outlined',
    className
  ].join(' ')

  return (
    <span
      className={CLASS_NAMES}
      {...restProps}
    >
      {name}
    </span>
  )
}

export default Icon
