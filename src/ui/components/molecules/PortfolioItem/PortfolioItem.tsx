import React from 'react'

import Image from 'ui/components/atoms/Image'

import * as Styled from './PortfolioItem.styled'

export interface PortfolioItemProps {
  imageHost: string
  priority?: boolean
  item: {
    title: string
    image: string
    description: string
  }
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imageHost,
  priority = false,
  item,
}) => (
  <Styled.Container>
    <Styled.Heading>{item.title}</Styled.Heading>
    <Styled.Image>
      <Image
        src={`${imageHost}/${item.image}`}
        alt={item.title}
        priority={priority}
        height={356}
        width={1140}
      />
    </Styled.Image>
    <Styled.Description>{item.description}</Styled.Description>
  </Styled.Container>
)

export default PortfolioItem
