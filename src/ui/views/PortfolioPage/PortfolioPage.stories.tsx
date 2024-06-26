import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import PortfolioPage from './PortfolioPage'

export default {
  title: 'views/PortfolioPage',
  component: PortfolioPage,
} as Meta<typeof PortfolioPage>

const Template: StoryFn<typeof PortfolioPage> = () => <PortfolioPage />

export const Sample = Template.bind({})
