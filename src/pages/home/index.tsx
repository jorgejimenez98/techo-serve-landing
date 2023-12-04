import { Flex } from '@/components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { i18n } from 'next-i18next'
import { isLocal } from '@/lib/utils'
import { Logo, Seo } from '@/components/common'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage: NextPage = ()  => {

  return <>
    <Seo />
    <Flex direction='column' justify='center' items='center' style={{ height: '600px' }}>
      <Logo align='center'/>
    </Flex>
  </>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (isLocal) await i18n?.reloadResources()

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    }
  }
}

export default HomePage
