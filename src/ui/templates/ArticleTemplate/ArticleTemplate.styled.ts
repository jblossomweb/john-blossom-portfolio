import styled from 'styled-components'
import tw from 'tailwind-styled-components'

import fadeIn from 'ui/animations/fadeIn'

export interface HeaderHeightProps {
  $headerHeight?: number
}

export const Main = styled(tw.main`
  max-w-screen-xl
  w-full
  p-4
  flex
  mx-auto
`)<HeaderHeightProps>`
  animation: ${fadeIn} 0.25s ease-in;
  min-height: calc(100vh - ${({ $headerHeight }) => $headerHeight}px);
`
