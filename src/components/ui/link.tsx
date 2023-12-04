import React from 'react'
import type { UrlObject } from 'url'
import { Text, type TextProps } from './text'
import { default  as NextLink } from 'next/link'

export interface LinkProps extends TextProps {
  to:  string | UrlObject
}

export const Link: React.FC<LinkProps> = ({ to, children, ...restProps }) => {
  return (
    <NextLink href={to} passHref>
      <Text {...restProps}>{children}</Text>
    </NextLink>
  )
}
