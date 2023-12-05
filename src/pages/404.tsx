import { GetStaticProps, NextPage } from 'next'
import { i18n, useTranslation } from 'next-i18next'
import { isLocal } from '@/lib/utils'
import { Seo } from '@/components/common'
import { Flex } from '@/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Link } from '@/components/ui'

const NotFoundPage: NextPage = ()  => {
  const { t } = useTranslation()

  return <>
    <Seo title={t('404.Title')} />

    {/* Content */}
    <Flex  justify='center' items='center' className='mt-10 mb-10 px-5 lg:mb-0 lg:mt-20'>
      <Flex
        justify='center'
        items='center'
        direction='column'
        className='bg-white border border-gray-200 px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl'
      >
        {/* 404 Label */}
        <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300'>
          404
        </p>

        {/* 404 Title */}
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>
          {t('404.Subtitle')}
        </p>

        {/* 404 Description */}
        <p className='text-gray-500 mt-4 pb-4 border-b-2 text-center'>
          {t('404.Description')}
        </p>

        {/* Link Btn */}
        <Link to='/' icon='arrow_back' linkClass='btn btn-ghost mt-3'>
          {t('404.Back')}
        </Link>
      </Flex>
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

export default NotFoundPage
