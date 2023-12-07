import React from 'react'
import { Text } from '../text'

export interface FieldSetProps  {
  children?: React.ReactNode
  label?: string,
  containerClassName?: string
}

export const FieldSet: React.FC<FieldSetProps> = (props) => {
  const { children, label, containerClassName } = props

  return (
    <div className={`form-control ${containerClassName}`}>
      {/* Label */}
      {label && (
        <Text
          size='lg'
          type='muted'
          variant='label'
          className='ml-3 mb-1'
        >
          {label}
        </Text>
      )}

      {/* Input */}
      {children}
    </div>
  )
}
