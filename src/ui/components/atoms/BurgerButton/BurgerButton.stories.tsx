import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import BurgerButton, { type BurgerButtonProps } from './BurgerButton'

export default {
  title: 'components/atoms/BurgerButton',
  component: BurgerButton,
  argTypes: {
    //
  },
} as Meta<typeof BurgerButton>

const Template: StoryFn<typeof BurgerButton> = (args: BurgerButtonProps) => (
  <BurgerButton {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  //
}
