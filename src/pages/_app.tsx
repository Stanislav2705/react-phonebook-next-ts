import type { AppProps } from 'next/app'
// import { ThemeProvider } from '@emotion/react';
// import { theme } from '@/theme';
import Layout from '@/components/Layout/layout';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
        {/* <SessionProvider session={pageProps.session}> */}
          <Component {...pageProps} />
        {/* </SessionProvider> */}
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default App;