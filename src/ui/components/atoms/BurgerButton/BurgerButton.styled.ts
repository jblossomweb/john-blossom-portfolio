import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const Button = styled(tw.button`
  inline-flex
  items-center
  p-2 w-10 h-10
  justify-center
  text-sm
  text-gray-500
  rounded-lg
  md:hidden
  hover:bg-gray-100
  focus:outline-none
  focus:ring-2
  focus:ring-gray-200
  dark:text-gray-400
  dark:hover:bg-gray-700
  dark:focus:ring-gray-600
`).attrs({
  type: 'button',
})``

export const ScreenReader = tw.span`
  sr-only
`
