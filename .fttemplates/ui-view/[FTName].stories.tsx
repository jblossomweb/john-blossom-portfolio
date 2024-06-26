import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import <FTName | capitalize> from './<FTName | capitalize>'

export default {
  title: title: 'views/<FTName | capitalize>',
  component: <FTName | capitalize>,
} as Meta<typeof <FTName | capitalize>>

const Template: StoryFn<typeof <FTName | capitalize>> = () => <<FTName | capitalize> />

export const Sample = Template.bind({})
