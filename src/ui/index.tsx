import React from 'react'
import type { AppProps } from 'next/app'

import StyledComponentsRegistry from 'config/styledComponentsRegistry'

const App = ({ Component, pageProps }: AppProps) => (
  <StyledComponentsRegistry>
    <Component {...pageProps} />
  </StyledComponentsRegistry>
)

export default App
