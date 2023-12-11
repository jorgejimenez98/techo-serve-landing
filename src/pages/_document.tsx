import { PAGE_CONSTANTS, SEO_CONSTANTS } from '@/lib/constants'
import { Html, Head, Main, NextScript } from 'next/document'


export default function MyDocument() {

  return (
    <Html lang='en' data-theme='light'>
      <Head>
        {/* Standar Meta Tags */}
        <meta charSet='UTF-8' />
        <meta name='theme-color' content='#004d80' />
        <meta name='color-scheme' content='light' />
        <link rel='icon' href={SEO_CONSTANTS.FAVICON} />
        <link rel='shortcut icon' href={SEO_CONSTANTS.FAVICON} />

        {/* Page Title and Description */}
        <meta name='title' content={PAGE_CONSTANTS.APP_NAME} />
        <meta name='description' content={SEO_CONSTANTS.DESCRIPTION} />

        {/* Open Graph tags */}

        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:url' content={SEO_CONSTANTS.DOMAIN} />
        <meta property='og:title' content={SEO_CONSTANTS.DESCRIPTION} />
        <meta property='og:site_name' content={PAGE_CONSTANTS.APP_NAME} />
        <meta property='og:image' content={SEO_CONSTANTS.IMAGE} />

        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={PAGE_CONSTANTS.APP_NAME} />
        <meta name='twitter:description' content={SEO_CONSTANTS.DESCRIPTION} />
        <meta name='twitter:image' content={SEO_CONSTANTS.IMAGE} />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
