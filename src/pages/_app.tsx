import AuthProvider from '@/providers/AuthProvider'
import RainbowWagmiProvider from '@/providers/RainbowWagmiProvider'
import { NextUIProvider } from "@nextui-org/react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <RainbowWagmiProvider>
      // <AuthProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      // </AuthProvider>
    // </RainbowWagmiProvider>
  )
}
