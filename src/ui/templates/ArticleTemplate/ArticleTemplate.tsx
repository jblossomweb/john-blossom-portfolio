import React from 'react'

import meta from 'data/meta.json'
import nav from 'data/nav.json'

import HtmlHead from 'ui/document/HtmlHead'
import NavBar, { NavBarHeight } from 'ui/layout/NavBar'

import * as Styled from './ArticleTemplate.styled'

export interface ArticleTemplateProps {
  subtitle?: string
  description?: string
  children: React.ReactNode
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
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

export default ArticleTemplate
