/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/services'
import { cva, type VariantProps } from 'class-variance-authority'
import { Flex } from '../layouts'
import Image from 'next/image'
import { Text } from './text'

export const dropdownVariants = cva(
  'dropdown',
  {
    variants: {
      postition: {
        end: 'dropdown-end',
        top: 'dropdown-top',
        bottom: 'dropdown-bottom',
        left: 'dropdown-left'
      },
    },
    defaultVariants: {
      postition: 'bottom',
    },
  }
)

export interface DropdownItem {
  id: string
  text: string,
  image?: string
}

export interface DropdownProps
  extends VariantProps<typeof dropdownVariants>,
  React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    options?: DropdownItem[],
    value: string,
    handleOptionClick: (id: string) => void
  }


const Dropdown: React.FC<DropdownProps> = ({
  postition,
  className,
  children,
  options,
  value,
  handleOptionClick,
  ...restProps
}) => {

  const [currentOption, setCurrentOption] = useState<DropdownItem>(null)

  useEffect(() => {
    setCurrentOption(options?.find(option => option?.id === value))
  }, [value])


  const dropdownItem = (item: DropdownItem) => (
    <Flex className='gap-3'>
      {item?.image && (
        <Image
          width={30}
          height={30}
          objectFit='cover'
          className='mt-1 rounded-sm'
          src={item?.image}
          alt={`image-${item?.id}`}
        />
      )}
      <Text>{item?.text}</Text>
    </Flex>
  )

  return (
    <div
      className={cn(
        dropdownVariants({ postition }),
        className,
      )}
      {...restProps}
    >
      {/* Current Item */}
      <div tabIndex={0} role='button' className='btn btn-ghost m-1'>
        {dropdownItem(currentOption)}
      </div>

      {/* List */}
      {children ? children : (
        <ul tabIndex={0} className='bg-white dropdown-content menu p-2 shadow rounded-box'>
          {options?.map(option => (
            <li
              key={option.id}
              className={`${option.id === value && 'active'} cursor-pointer`}
              onClick={() => handleOptionClick(option.id)}
            >
              {dropdownItem(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { Dropdown }
