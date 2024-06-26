import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import Link, { type LinkProps } from './Link'

export default {
  title: 'components/atoms/Link',
  component: Link,
  argTypes: {
    external: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta<typeof Link>

const Template: StoryFn<typeof Link> = (args: LinkProps) => <Link {...args} />

export const Internal = Template.bind({})
Internal.args = {
  href: '/route',
  children: 'Link to Internal Route',
}

export const External = Template.bind({})
External.args = {
  external: true,
  href: 'https://www.google.com/',
  children: 'Link to External Url',
}

export const NoChildren = Template.bind({})
NoChildren.args = {
  href: 'https://www.google.com/',
}
