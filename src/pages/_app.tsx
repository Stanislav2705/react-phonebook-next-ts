import type { AppProps } from 'next/app'
// import { ThemeProvider } from '@emotion/react';
// import { theme } from '@/theme';
import Layout from '@/components/Layout/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;