import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import AboutPage from './AboutPage'

export default {
  title: 'views/AboutPage',
  component: AboutPage,
} as Meta<typeof AboutPage>

const Template: StoryFn<typeof AboutPage> = () => <AboutPage />

export const Sample = Template.bind({})
