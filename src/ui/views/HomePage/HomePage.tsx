import React from 'react'
import type { NextPage } from 'next'

import meta from 'data/meta.json'
import HeroTemplate from 'ui/templates/HeroTemplate'

import * as Styled from './HomePage.styled'

const HomePage: NextPage = () => (
  <HeroTemplate subtitle={meta.subtitle}>
    <Styled.Title>{meta.title}</Styled.Title>
    <Styled.SubTitle>{meta.subtitle}</Styled.SubTitle>
    <Styled.Icons>
      <Styled.TypescriptIcon />
      <Styled.ReactIcon />
      <Styled.ReduxIcon />
      <Styled.NextIcon />
    </Styled.Icons>
  </HeroTemplate>
)

export default HomePage
