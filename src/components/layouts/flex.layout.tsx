import * as React from 'react'
import { cn } from '@/lib/services'
import { cva, type VariantProps } from 'class-variance-authority'

export const flexVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
      },
      justify: {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      items: {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      },
      wrap: {
        noWrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        wrapReverse: 'flex-wrap-reverse',
      },
    },
    defaultVariants: {
      direction: 'row',
      justify: 'start',
      items: 'start',
      wrap: 'noWrap',
    },
  }
)

export interface FlexProps
  extends VariantProps<typeof flexVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({
  className,
  direction,
  justify,
  items,
  wrap,
  children,
  ...restProps
}) => {
  return (
    <div
      className={cn(
        flexVariants({ direction, justify, items, wrap }),
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export { Flex }
