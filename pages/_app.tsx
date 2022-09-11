import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';

import type { AppProps } from 'next/app'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
