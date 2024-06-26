import React from 'react'
import type { NextPage } from 'next'

import HeroTemplate from 'ui/templates/HeroTemplate'

import * as Styled from './AboutPage.styled'

const AboutPage: NextPage = () => (
  <HeroTemplate subtitle="About">
    <Styled.Container>About Page</Styled.Container>
  </HeroTemplate>
)

export default AboutPage
