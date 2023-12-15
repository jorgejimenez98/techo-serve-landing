import '@/assets/scss/main.scss'
import { MainLayout } from '@/layouts'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { appWithTranslation } from 'next-i18next'
import { CookiesConsent } from '@/components/common'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

const TechoServeApp = ({ Component, pageProps }: AppProps) => {

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      {/* Cookies Banner */}
      <CookiesConsent />

      {/* Toaster */}
      <Toaster />
    </QueryClientProvider>
  )
}

export default appWithTranslation(TechoServeApp)
