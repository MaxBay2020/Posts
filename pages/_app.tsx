import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import {useRef} from "react";
import {Provider} from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = useRef(new QueryClient())

    return (
      <Provider store={store}>
          <QueryClientProvider client={queryClient.current}>
              <Hydrate state={pageProps.dehydratedState}>
                  <Component {...pageProps} />
              </Hydrate>
          </QueryClientProvider>
      </Provider>
    )
}

export default MyApp
