import { Html, Head, Main, NextScript } from 'next/document'


export default function MyDocument() {

  return (
    <Html>
      <Head>
        {/* Standar Meta Tags */}
        <meta charSet='UTF-8' />
        <meta name='theme-color' content='#1D1F2C' />
        <link rel='icon' href='/favicon.ico' />

        {/* Page Title and Description */}
        <meta name='title' content='Techo Serve' />

        {/* Open Graph tags */}
                
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:url' content='https://techoserve.com' />
        <meta property='og:title' content='Safeguard Your Industrial Assets with Technology and Corrosion Services Europe S.L.' />
        <meta property='og:site_name' content='TechCoServe - Industrial Asset Protection' />
  

        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Technology and Corrosion Services Europe S.L.' />
      
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css'
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
