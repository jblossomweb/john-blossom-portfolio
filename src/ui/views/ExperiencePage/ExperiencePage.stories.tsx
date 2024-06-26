import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import ExperiencePage from './ExperiencePage'

export default {
  title: 'views/ExperiencePage',
  component: ExperiencePage,
} as Meta<typeof ExperiencePage>

const Template: StoryFn<typeof ExperiencePage> = () => <ExperiencePage />

export const Sample = Template.bind({})
