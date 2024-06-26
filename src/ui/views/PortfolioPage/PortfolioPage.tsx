import React from 'react'
import type { NextPage } from 'next'

import portfolio from 'data/portfolio.json'
import ArticleTemplate from 'ui/templates/ArticleTemplate'
import PortfolioItem from 'ui/components/molecules/PortfolioItem'

import * as Styled from './PortfolioPage.styled'

const PortfolioPage: NextPage = () => (
  <ArticleTemplate subtitle="Portfolio">
    <Styled.Container>
      <Styled.Heading>Portfolio</Styled.Heading>
      <Styled.Items>
        {portfolio.map((item, i) => (
          <PortfolioItem
            key={item.image}
            priority={i < 7}
            item={item}
            imageHost={`https://${process.env.PORTFOLIO_IMAGE_HOST as string}`}
          />
        ))}
      </Styled.Items>
    </Styled.Container>
  </ArticleTemplate>
)

export default PortfolioPage
