import React from 'react'
import type { UrlObject } from 'url'
import { Text, type TextProps } from './text'
import { default  as NextLink } from 'next/link'
import { Flex } from '../layouts'
import { ICON } from '@/lib/types'
import { Icon } from './icon'

export interface LinkProps extends TextProps {
  to:  string | UrlObject
  target?: '_blank' | '_self'
  icon?: ICON
  linkClass?: string
}

export const Link: React.FC<LinkProps> = ({
  to,
  target = '_self',
  icon,
  children,
  linkClass,
  ...restProps
}) => {
  return (
    <NextLink
      href={to}
      passHref
      target={target}
      className={linkClass}
    >
      <Flex className='gap-2'>
        {icon && <Icon name={icon} />}
        <Text {...restProps}>{children}</Text>
      </Flex>
    </NextLink>
  )
}
