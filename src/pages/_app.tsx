import Layout from '@/components/Layout/layout'
import ThemeWrapper from '@/components/ThemeProvider/ThemeWrapper'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeWrapper>
  )
}
