import * as React from 'react'
import { cn } from '@/lib/services'
import { cva, type VariantProps } from 'class-variance-authority'

export const dividerVariants = cva(
  'divider h-1',
  {
    variants: {
      direction: {
        vertical: 'divider-vertical',
        horizontal: 'divider-horizontal h-full',
      },
      type: {
        'default': '',
        neutral: 'divider-neutral',
        primary: 'divider-primary',
        secondary: 'divider-secondary',
        accent: 'divider-accent',
        success: 'divider-success',
        warning: 'divider-warning',
        info: 'divider-info',
        error: 'divider-error'
      },
    },
    defaultVariants: {
      direction: 'vertical',
      type: 'default'
    },
  }
)

export interface DividerProps extends VariantProps<typeof dividerVariants>,
  React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    className?: string
  }

const Divider: React.FC<DividerProps> = ({
  className,
  type,
  children,
  direction,
  ...restProps
}) => {

  return (
    <div
      className={cn(
        dividerVariants({ type, direction }),
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export { Divider }
