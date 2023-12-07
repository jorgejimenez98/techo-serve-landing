import React from 'react'
import { useField, FieldHookConfig } from 'formik'
import { Text } from '../text'
import { FieldSet, FieldSetProps } from './field-set'

export type TextInputProps = FieldSetProps & FieldHookConfig<string>;

export const TextAreaInput: React.FC<TextInputProps> = (props) => {
  const { placeholder, className, ...restProps } = props

  const [field, meta] = useField(restProps)
  const hasError = meta.touched && meta.error

  const INPUT_CLASSNAMES = [
    'textarea h-48 textarea-bordered',
    `${hasError ? 'textarea-error' : ''}`,
    className
  ].join(' ')

  return (
    <FieldSet
      label={props.label}
      containerClassName={props.containerClassName}
    >
      {/* Input */}
      <textarea
        {...field}
        placeholder={placeholder}
        className={INPUT_CLASSNAMES}
      />

      {/* Error */}
      {hasError && (
        <Text
          size='xs'
          type='error'
          className='-mt-1 mb-3'
        >
          {meta.error}
        </Text>
      )}
    </FieldSet>
  )
}
