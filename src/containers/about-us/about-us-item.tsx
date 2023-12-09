import React from 'react'
import { AboutUsItemType } from '@/lib/types'
import { Flex } from '@/components/layouts'
import { ImageCircle } from '@/components/common'
import { Text } from '@/components/ui'
import { useWindowSize } from '@/hooks'

const AboutUsItem: React.FC<{ item: AboutUsItemType }> = ({ item }) => {
  const { isMobile } = useWindowSize()

  const CONTAINER_CLASS_NAMES = [
    item.className,
    `${item.reverse ? 'gap-20 flex-row-reverse' : 'lg:px-10 gap-10'}`,
  ].join(' ')

  return (
    <Flex
      justify='between'
      className={CONTAINER_CLASS_NAMES}
      items='center'
    >
      {/* Texts */}
      <Flex
        direction='column'
        className='gap-5 lg:gap-3'
        justify='center'
      >
        <Text size='2xl' variant='h2' className='font-bold'>
          {item.title}
        </Text>
        <Text size='xl' variant='h4' className='mb-5 lg:mb-0'>
          {item.description}
        </Text>
      </Flex>

      {/* Image */}
      {!isMobile && (
        <ImageCircle
          src={item.imageSrc}
          maskPosition={item.maskPosition}
        />
      )}
    </Flex>
  )
}

export { AboutUsItem }
