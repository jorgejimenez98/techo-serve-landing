import { PAGE_CONSTANTS } from '@/lib/constants'
import { Html, Head, Main, NextScript } from 'next/document'


export default function MyDocument() {

  return (
    <Html lang='en' data-theme='light'>
      <Head>
        {/* Standar Meta Tags */}
        <meta charSet='UTF-8' />
        <meta name='theme-color' content='#004d80' />
        <meta name='color-scheme' content='light' />
        <link rel='icon' href='/images/favicon.ico' />
        <link rel='shortcut icon' href='/images/favicon.ico' />

        {/* Page Title and Description */}
        <meta name='title' content={PAGE_CONSTANTS.APP_NAME} />

        {/* Open Graph tags */}

        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:url' content='https://techoserve.com' />
        <meta property='og:title' content='Safeguard Your Industrial Assets with Technology and Corrosion Services Europe S.L.' />
        <meta property='og:site_name' content='TechCoServe - Industrial Asset Protection' />


        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Technology and Corrosion Services Europe S.L.' />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
