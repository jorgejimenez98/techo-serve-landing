import '@/assets/scss/main.scss'
import { MainLayout } from '@/layouts'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { appWithTranslation } from 'next-i18next'

const queryClient = new QueryClient()

const TechoServeApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  )
}

export default appWithTranslation(TechoServeApp)
