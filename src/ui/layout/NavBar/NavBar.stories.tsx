import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import appMeta from 'data/meta.json'
import appNav from 'data/nav.json'

import NavBar, { type NavBarProps } from './NavBar'

const sampleNav = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Foo',
    href: '/foo',
  },
  {
    label: 'Bar',
    href: '/bar',
  },
  {
    label: 'Buzz',
    href: '/buzz',
  },
]

export default {
  title: 'layout/NavBar',
  component: NavBar,
  argTypes: {
    //
  },
} as Meta<typeof NavBar>

const Template: StoryFn<typeof NavBar> = (args: NavBarProps) => (
  <NavBar {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  homeLabel: 'Sample',
  items: sampleNav,
}

export const App = Template.bind({})
App.args = {
  homeLabel: appMeta.title,
  items: appNav,
}
