import React from 'react'
import type { UrlObject } from 'url'
import { Text, type TextProps } from './text'
import { default  as NextLink } from 'next/link'

export interface LinkProps extends TextProps {
  to:  string | UrlObject
  target?: '_blank' | '_self'
}

export const Link: React.FC<LinkProps> = ({
  to,
  target = '_self',
  children,
  ...restProps
}) => {
  return (
    <NextLink href={to} passHref target={target}>
      <Text {...restProps}>{children}</Text>
    </NextLink>
  )
}
