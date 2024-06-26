import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import DemosPage from './DemosPage'

export default {
  title: 'views/DemosPage',
  component: DemosPage,
} as Meta<typeof DemosPage>

const Template: StoryFn<typeof DemosPage> = () => <DemosPage />

export const Sample = Template.bind({})
