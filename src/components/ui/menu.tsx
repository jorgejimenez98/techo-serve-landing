import * as React from 'react'
import { cn } from '@/lib/services'
import { cva, type VariantProps } from 'class-variance-authority'
import { ICON } from '@/lib/types'
import { Link } from './link'
import { Flex } from '../layouts'
import { Icon } from './icon'

export const textVariants = cva(
  'menu',
  {
    variants: {
      size: {
        xs: 'menu-xs',
        sm: 'menu-sm',
        md: 'menu-md',
        lg: 'menu-lg',
      },
      direction: {
        horizontal: 'menu-horizontal',
        vertical: 'menu-vertical',
      },
    },
    defaultVariants: {
      size: 'sm',
      direction: 'vertical',
    },
  }
)

export interface MenuListItem {
  to: string
  text: string
  icon?: ICON
}

export interface MenuProps
  extends VariantProps<typeof textVariants>,
  React.HTMLAttributes<HTMLUListElement> {
    children?: React.ReactNode,
    displayIcon?: boolean
    items: MenuListItem[]
  }

const Menu: React.FC<MenuProps> = ({
  className,
  size,
  direction,
  children,
  displayIcon = true,
  items,
  ...restProps
}) => {

  return (
    <ul
      className={cn(
        textVariants({ size, direction }),
        className,
      )}
      {...restProps}
    >
      {children ? children : items.map((item, idx) => (
        <li key={idx}>
          <Link to={item.to}>
            <Flex className='gap-2'>
              {(item.icon && displayIcon) && <Icon name={item.icon} />}
              {item.text}
            </Flex>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { Menu }
