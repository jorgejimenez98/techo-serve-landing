import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { i18n } from 'next-i18next'
import { isLocal } from '@/lib/utils'
import { sections } from '@/containers'
import { Seo } from '@/components/common'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage: NextPage = ()  => {

  return <>
    <Seo />

    {/* Sections */}
    {sections?.map((sectionComponent, idx) => (
      <section key={idx}>
        {React.createElement(sectionComponent)}
      </section>
    ))}
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
