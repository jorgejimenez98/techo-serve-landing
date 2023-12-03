import React from 'react'
import { Flex } from '../layouts'
import { Text } from '@/components/ui'
import { PAGE_CONSTANTS } from '@/lib/constants'

const Logo: React.FC<{ align?: 'center' | 'start' }> = ({ align = 'center' }) => {
  return (
    <Flex direction='column' justify='center' items={align}>
      <Text
        variant='h1'
        type='primary'
        className='font-bolder uppercase'
      >
        {PAGE_CONSTANTS.APP_NAME}
      </Text>
      <Text
        size='xl'
        type='muted'
        weigth='bold'
        italic
      >
        {PAGE_CONSTANTS.COMPANY_FULL_NAME}
      </Text>
    </Flex>
  )
}

export { Logo }
