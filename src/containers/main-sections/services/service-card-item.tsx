import React from 'react'
import { Card, Icon, Text } from '@/components/ui'
import { Flex } from '@/components/layouts'
import { ServiceItem } from '@/lib/types'

const ServiceCardItem: React.FC<{ serviceItem: ServiceItem }> = ({ serviceItem }) => {
  return (
    <Flex
      wrap='shrink'
      className='max-w-full w-full md:w-1/2 lg:w-1/3 lg:px-4 wow'
    >
      <Card className='mb-10 transform transition duration-300 ease-in-out hover:-translate-y-2'>

        {/* Icon */}
        <Icon name={serviceItem.icon} />

        {/* Title */}
        <Text
          size='lg'
          weigth='semibold'
          variant='h3'
          className='leading-normal mb-2 text-black'
        >
          {serviceItem.title}
        </Text>

        {/* Subtitle */}
        <Text
          variant='p'
          className='text-gray-500'
        >
          {serviceItem.subtitle}
        </Text>
      </Card>
    </Flex>
  )
}

export default ServiceCardItem
