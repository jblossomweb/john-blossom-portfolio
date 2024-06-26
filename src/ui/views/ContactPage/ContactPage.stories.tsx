import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import ContactPage from './ContactPage'

export default {
  title: 'views/ContactPage',
  component: ContactPage,
} as Meta<typeof ContactPage>

const Template: StoryFn<typeof ContactPage> = () => <ContactPage />

export const Sample = Template.bind({})
