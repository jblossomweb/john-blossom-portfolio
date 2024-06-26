import React from 'react'

import meta from 'data/meta.json'
import nav from 'data/nav.json'

import HtmlHead from 'ui/document/HtmlHead'
import NavBar, { NavBarHeight } from 'ui/layout/NavBar'

import * as Styled from './HeroTemplate.styled'

export interface HeroTemplateProps {
  subtitle?: string
  description?: string
  children: React.ReactNode
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({
  subtitle = undefined,
  description = undefined,
  children,
}) => (
  <>
    <HtmlHead
      subtitle={subtitle}
      description={description}
    />
    <NavBar
      homeLabel={meta.title}
      items={nav}
    />
    <Styled.Main $headerHeight={NavBarHeight}>{children}</Styled.Main>
  </>
)

export default HeroTemplate
