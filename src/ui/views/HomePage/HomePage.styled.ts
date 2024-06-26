import tw from 'tailwind-styled-components'

export const Container = tw.div`
  px-8 py-0
`

export const Main = tw.main`
  min-h-screen
  px-0 py-16
  flex flex-col
  justify-center
  items-center
`

export const Title = tw.h1`
  text-4xl
  text-center
`

export const Description = tw.p`
  text-center
  mx-0 my-16
  leading-5
  text-base
`

export const Code = tw.code`
  p-2 rounded-md
  bg-slate-300
  text-sm
  font-mono
`

export const Footer = tw.div`
  mx-0 my-0
`
