import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import HeroTemplate, { type HeroTemplateProps } from './HeroTemplate'

export default {
  title: 'templates/HeroTemplate',
  component: HeroTemplate,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<typeof HeroTemplate>

const Template: StoryFn<typeof HeroTemplate> = (args: HeroTemplateProps) => (
  <HeroTemplate {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  children: 'Sample Page Content',
}
