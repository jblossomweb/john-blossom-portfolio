import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import <FTName | capitalize>, { type <FTName | capitalize>Props } from './<FTName | capitalize>'

export default {
  title: 'components/<FTName | capitalize>',
  component: <FTName | capitalize>,
  argTypes: {
    //
  },
} as Meta<typeof <FTName | capitalize>>

const Template: StoryFn<typeof <FTName | capitalize>> = (args: <FTName | capitalize>Props) => <<FTName | capitalize> {...args} />

export const Sample = Template.bind({})
Sample.args = {
  //
}
