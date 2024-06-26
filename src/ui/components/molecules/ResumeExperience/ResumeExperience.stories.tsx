import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import type Experience from 'types/Experience'
import experience from 'data/experience.json'

import ResumeExperience, {
  type ResumeExperienceProps,
} from './ResumeExperience'

const sampleExperience = experience[0].experiences[0] as unknown as Experience

export default {
  title: 'components/molecules/ResumeExperience',
  component: ResumeExperience,
  argTypes: {
    experience: { control: 'object' },
  },
} as Meta<typeof ResumeExperience>

const Template: StoryFn<typeof ResumeExperience> = (
  args: ResumeExperienceProps,
) => <ResumeExperience {...args} />

export const Sample = Template.bind({})
Sample.args = {
  experience: sampleExperience,
}
