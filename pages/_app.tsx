import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Provider} from 'react-redux'
import store from '../redux/store'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Hydrate} from "@tanstack/react-query";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: unknown }>) {
    const [queryClient] = useState(() => new QueryClient())

    return (
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
          </QueryClientProvider>
      </Provider>
    )
}

export default MyApp
