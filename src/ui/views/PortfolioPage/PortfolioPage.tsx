import React from 'react'
import type { NextPage } from 'next'

import HeroTemplate from 'ui/templates/HeroTemplate'

import * as Styled from './PortfolioPage.styled'

const PortfolioPage: NextPage = () => (
  <HeroTemplate subtitle="Portfolio">
    <Styled.Container>Portfolio Page</Styled.Container>
  </HeroTemplate>
)

export default PortfolioPage
