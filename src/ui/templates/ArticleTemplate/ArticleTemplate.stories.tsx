import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import ArticleTemplate, { type ArticleTemplateProps } from './ArticleTemplate'

export default {
  title: 'templates/ArticleTemplate',
  component: ArticleTemplate,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<typeof ArticleTemplate>

const Template: StoryFn<typeof ArticleTemplate> = (
  args: ArticleTemplateProps,
) => <ArticleTemplate {...args} />

export const Sample = Template.bind({})
Sample.args = {
  children: 'Sample Page Content',
}
