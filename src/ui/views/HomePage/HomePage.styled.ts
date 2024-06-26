import styled from 'styled-components'
import tw from 'tailwind-styled-components'

import * as UiIcons from 'ui/icons'
import fadeIn from 'ui/animations/fadeIn'
import constants from 'ui/constants.json'

const { md } = constants.breakpoints

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 6rem;
  animation: ${fadeIn} 1s ease-in;

  @media (min-width: ${md}px) {
    font-size: 6rem;
    line-height: 9rem;
  }
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  animation: ${fadeIn} 2s ease-in;

  @media (min-width: ${md}px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`

export const Icons = tw.div`
  p-4
  flex flex-row
  justify-center
  items-center
  gap-6
  text-7xl
`

export const ReactIcon = styled(UiIcons.React)`
  font-size: inherit;
  animation: ${fadeIn} 3s ease-in;
`

export const ReduxIcon = styled(UiIcons.Redux)`
  font-size: inherit;
  animation: ${fadeIn} 3s ease-in;
`

export const TypescriptIcon = styled(UiIcons.Typescript)`
  font-size: inherit;
  animation: ${fadeIn} 3s ease-in;
`

export const NextIcon = styled(UiIcons.Next)`
  font-size: inherit;
  animation: ${fadeIn} 3s ease-in;
`
