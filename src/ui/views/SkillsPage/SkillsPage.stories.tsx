import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import SkillsPage from './SkillsPage'

export default {
  title: 'views/SkillsPage',
  component: SkillsPage,
} as Meta<typeof SkillsPage>

const Template: StoryFn<typeof SkillsPage> = () => <SkillsPage />

export const Sample = Template.bind({})
