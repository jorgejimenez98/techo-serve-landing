import { Logo, Seo } from '@/components/common'
import { Flex } from '@/components/layouts'
import { NextPage } from 'next'

const HomePage: NextPage = ()  => {

  return <>
    <Seo />
    <Flex direction='column' justify='center' items='center' style={{ height: '600px' }}>
      <Logo align='center'/>
    </Flex>
  </>
}

export default HomePage
