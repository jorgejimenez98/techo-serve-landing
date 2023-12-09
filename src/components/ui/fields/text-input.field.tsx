import React, { useRef, useEffect } from 'react'
import { useField, FieldHookConfig } from 'formik'
import { Text } from '../text'
import { FieldSet, FieldSetProps } from './field-set'

export type TextInputProps = FieldSetProps & FieldHookConfig<string> & {
  autoFocus?: boolean
};

export const TextInput: React.FC<TextInputProps> = (props) => {
  const { placeholder, autoFocus, className, ...restProps } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

  const [field, meta] = useField(restProps)
  const hasError = meta.touched && meta.error

  const INPUT_CLASSNAMES = [
    'input input-bordered',
    `${hasError ? 'input-error' : ''}`,
    className
  ].join(' ')

  useEffect(() => {
    if (autoFocus) inputRef.current.focus()
  }, [autoFocus])

  return (
    <FieldSet
      label={props.label}
      containerClassName={props.containerClassName}
    >
      {/* Input */}
      <input
        type='text'
        ref={inputRef}
        {...field}
        placeholder={placeholder}
        className={INPUT_CLASSNAMES}
      />

      {/* Error */}
      {hasError && (
        <Text
          size='xs'
          type='error'
          className='-mt-3 mb-3 ml-3'
        >
          {meta.error}
        </Text>
      )}
    </FieldSet>
  )
}
