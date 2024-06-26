import React from 'react'
import type { NextPage } from 'next'

import HeroTemplate from 'ui/templates/HeroTemplate'

import * as Styled from './DemosPage.styled'

const DemosPage: NextPage = () => (
  <HeroTemplate subtitle="Demos">
    <Styled.Container>Demos Page</Styled.Container>
  </HeroTemplate>
)

export default DemosPage
