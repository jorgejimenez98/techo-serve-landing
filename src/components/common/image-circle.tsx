/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Flex } from '../layouts'

interface ImageCircleProps {
  src: string;
  className?: string
  maskPosition?: 'top' | 'bottom'
}

const ImageCircle: React.FC<ImageCircleProps> = (props) => {
  const { src, className, maskPosition = 'top' } = props

  const CONTAINER_CLASS_NAMES = [
    className,
    'relative'
  ].join(' ')

  const CLASS_MASK_POSITION = {
    top: 'left-24 bottom-16',
    bottom: 'right-24 top-16'
  }[maskPosition]

  const CLASS_NAMES = {
    IMAGE_CONTAINER: 'w-96 h-96 rounded-full overflow-hidden z-10',
    IMAGE: 'object-cover w-full h-full rounded-full',
    MASK: `absolute ${CLASS_MASK_POSITION} w-80 h-80 bg-gray-300 rounded-full`
  }

  return (
    <Flex
      justify='center'
      items='center'
      className={CONTAINER_CLASS_NAMES}
    >
      <div className={CLASS_NAMES.IMAGE_CONTAINER}>
        <img
          src={src}
          alt='Profile'
          className={CLASS_NAMES.IMAGE}
        />
      </div>
      <div className={CLASS_NAMES.MASK} />
    </Flex>
  )
}

export{ ImageCircle }
