import styled from 'styled-components'
import tw from 'tailwind-styled-components'

import fadeIn from 'ui/animations/fadeIn'

export interface HeaderHeightProps {
  $headerHeight?: number
}

export const Main = styled(tw.main`
  min-h-screen
  px-0 py-16
  flex flex-col
  justify-center
  items-center
  text-center
`)<HeaderHeightProps>`
  animation: ${fadeIn} 0.25s ease-in;
  min-height: calc(100vh - ${({ $headerHeight }) => $headerHeight}px);
`
