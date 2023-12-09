import React from 'react'
import { Flex } from '../layouts'
import { Text } from '@/components/ui'
import { PAGE_CONSTANTS } from '@/lib/constants'

interface LogoProps {
  align?: 'center' | 'start'
  showDescription?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({
  align = 'start',
  showDescription = true,
  className,
}) => {
  return (
    <Flex
      direction='column'
      justify='center'
      items={align}
      className={className}
    >
      <Text
        variant='h1'
        type='primary'
        className='font-bolder uppercase'
      >
        {PAGE_CONSTANTS.APP_NAME}
      </Text>
      {showDescription && (
        <Text
          size='xl'
          type='muted'
          weigth='bold'
          italic
        >
          {PAGE_CONSTANTS.COMPANY_FULL_NAME}
        </Text>
      )}
    </Flex>
  )
}

export { Logo }
