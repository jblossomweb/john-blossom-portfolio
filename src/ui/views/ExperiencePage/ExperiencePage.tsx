import React from 'react'
import type { NextPage } from 'next'

import experienceSections from 'data/experience.json'
import type ExperienceSection from 'types/ExperienceSection'

import ArticleTemplate from 'ui/templates/ArticleTemplate'
import ResumeExperience from 'ui/components/molecules/ResumeExperience'

import * as Styled from './ExperiencePage.styled'

const ExperiencePage: NextPage = () => (
  <ArticleTemplate subtitle="Experience">
    <Styled.Page>
      <Styled.Heading>Experience</Styled.Heading>
      <Styled.Sections>
        {(experienceSections as ExperienceSection[]).map((section) => (
          <Styled.Section key={section.heading}>
            <Styled.SubHeading>{section.heading}</Styled.SubHeading>
            {section.experiences.map((experience) => (
              <ResumeExperience
                key={experience.company}
                experience={experience}
              />
            ))}
          </Styled.Section>
        ))}
      </Styled.Sections>
    </Styled.Page>
  </ArticleTemplate>
)

export default ExperiencePage
