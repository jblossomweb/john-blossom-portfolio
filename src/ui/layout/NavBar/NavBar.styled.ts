import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { SiLinkedin, SiWellfound, SiGithub } from 'react-icons/si'

import constants from 'ui/constants.json'

const { md, lg } = constants.breakpoints

export const NavBarHeight = 66

export interface ActiveProps {
  $active?: boolean
}

export const Nav = styled(tw.nav`
  bg-white
  drop-shadow
  border-gray-200
  dark:bg-gray-900
  flex
  items-center
`)`
  height: ${NavBarHeight}px;

  @media (min-width: ${md}px) {
    height: ${NavBarHeight * 2}px;
  }

  @media (min-width: ${lg}px) {
    height: ${NavBarHeight}px;
  }
`

export const Bar = tw.div`
  max-w-screen-xl
  w-full
  flex
  flex-wrap
  items-center
  justify-between
  mx-auto
  p-4
`

export const Title = styled(tw.div`
  h-full  
  flex flex-col
  items-center
  justify-center
`)`
  height: ${NavBarHeight}px;
`

export const HomeLabel = tw.span`
  self-center
  text-2xl
  font-semibold
  whitespace-nowrap
  dark:text-white
`

export const Container = tw.div`
  hidden
  w-full
  md:block
  md:w-auto
  flex flex-row
  justify-end
  items-end
`

export const List = tw.ul<ActiveProps>`
  font-medium
  ${({ $active }) => ($active ? 'flex' : 'hidden')}
  flex-col
  gap-0
  p-0 md:p-0
  mt-0

  absolute
  top-16 right-0

  border
  border-gray-100
  rounded-lg
  bg-gray-50
  
  md:flex
  md:flex-row
  md:relative
  md:top-0
  md:space-x-1
  md:mt-0
  md:border-0
  md:bg-white
  
  dark:bg-gray-800
  dark:border-gray-700
  md:dark:bg-gray-900

  rtl:space-x-reverse
`

export const ListItem = styled.li<ActiveProps>`
  a {
    display: block;
    padding: 0.5rem 1.75rem;
    color: ${({ $active }) => ($active ? '#fff' : '#bbb')};
    background: ${({ $active }) => ($active ? '#3b82f6' : 'transparent')};
    border-bottom: 4px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom: ${({ $active }) =>
        $active ? '4px solid transparent' : '4px solid #3b82f6'};
      text-decoration: none;
      color: ${({ $active }) => ($active ? '#fff' : '#fff')};
    }

    @media (min-width: ${md}px) {
      padding: 1.2rem 0.75rem;
    }
  }
`

export const LinkedIn = styled(SiLinkedin)`
  color: #0a66c2;
  font-size: 1.5rem;
`

export const WellFound = styled(SiWellfound)`
  color: #ec2e39;
  font-size: 1.5rem;
`

export const GitHub = styled(SiGithub)`
  color: #fff;
  font-size: 1.5rem;
`
