import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import portfolio from 'data/portfolio.json'
import PortfolioItem, { type PortfolioItemProps } from './PortfolioItem'

export default {
  title: 'components/molecules/PortfolioItem',
  component: PortfolioItem,
  argTypes: {
    //
  },
} as Meta<typeof PortfolioItem>

const Template: StoryFn<typeof PortfolioItem> = (args: PortfolioItemProps) => (
  <PortfolioItem {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  imageHost: `https://${process.env.PORTFOLIO_IMAGE_HOST}`,
  item: portfolio[0],
}
