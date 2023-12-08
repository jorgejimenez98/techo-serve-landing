import React from 'react'
import { Flex } from '../layouts'
import { Text } from '../ui'

interface SubtitleProps {
  text: string
  className?: string
}

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => {

  const CLASS_NAMES = [
    className,
    'text-center px-5 lg:px-20'
  ].join(' ')

  return (
    <Flex
      direction='column'
      justify='center'
      items='center'
      className={CLASS_NAMES}
    >
      <Text
        size='xl'
        variant={'p'}
        weigth='light'
        className='text-gray-500 leading-relaxed'
      >
        {text}
      </Text>
    </Flex>
  )
}

export { Subtitle }
