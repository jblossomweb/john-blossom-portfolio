import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const Experience = tw.div`
  w-full
  pb-6
`

export const ExperienceHeading = tw.div`
  flex flex-row
  justify-start
  align-center
  gap-2
`

export const ExperienceHeadingColumn = styled.div`
  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ExperienceTitle = tw.h3`
  text-xl
  font-bold
  italic
`

export const ExperienceCompany = tw.h4`
  text-lg
  font-bold
  pb-2
`

export const ExperienceTenure = tw.span`
  text-sm
  font-normal
`

export const Description = tw.p`
  w-full
  text-base
`
