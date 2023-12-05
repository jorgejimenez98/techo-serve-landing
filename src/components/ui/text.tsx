import * as React from 'react'
import { cn } from '@/lib/services'
import { cva, type VariantProps } from 'class-variance-authority'

export const textVariants = cva(
  'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
      },
      type: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
        foreground: 'text-foreground',
        muted: 'opacity-75'
      },
      variant: {
        span: '',
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
      },
      weigth: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-bolder'
      },
    },
    defaultVariants: {
      size: 'base',
      type: 'primary',
      variant: 'span',
      weigth: 'normal'
    },
  }
)

export interface TextProps
  extends VariantProps<typeof textVariants>,
  React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    italic?: boolean
  }

const Text: React.FC<TextProps> = ({
  className,
  size,
  type,
  variant,
  children,
  italic = false,
  ...restProps
}) => {
  const Element = variant || 'span'

  return (
    <Element
      className={cn(
        textVariants({ size, type, variant }),
        italic ? 'italic' : '',
        className
      )}
      {...restProps}
    >
      {children}
    </Element>
  )
}

export { Text }
