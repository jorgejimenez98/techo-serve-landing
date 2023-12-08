import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/services'
import { ICON } from '@/lib/types'
import { Icon } from './icon'


const buttonVariants = cva(
  `
    inline-flex items-center justify-center rounded-md text-sm gap-1
    font-medium shadow ring-offset-background transition-colors hover-transition
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow-md hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'shadow-none hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 shadow-none hover:underline'
      },
      size: {
        sm: 'h-8 rounded-md px-3',
        lg: 'h-11 rounded-md px-8 text-md',
        icon: 'rounded-full btn-circle'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      icon?: ICON
      children?: React.ReactNode
  }

const Button: React.FC<ButtonProps> = (props) => {
  const { className, variant, size, icon, children, ...restProps } = props

  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        className,
      )}
      {...restProps}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  )
}

export { Button }
