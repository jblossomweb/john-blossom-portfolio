import React from 'react'

import type Experience from 'types/Experience'
import Image from 'ui/components/atoms/Image'

import * as Styled from './ResumeExperience.styled'

export interface ResumeExperienceProps {
  experience: Experience
}

const ResumeExperience: React.FC<ResumeExperienceProps> = ({ experience }) => (
  <Styled.Experience key={experience.company}>
    <Styled.ExperienceHeading>
      {!!experience.logo && (
        <Styled.ExperienceHeadingColumn>
          <Image
            src={`/logos/${experience.logo}`}
            alt={experience.company}
            width={50}
            height={50}
          />
        </Styled.ExperienceHeadingColumn>
      )}
      <Styled.ExperienceHeadingColumn>
        <Styled.ExperienceTitle>
          {experience.title}
          {experience.team?.length ? `, ${experience.team}` : ''}
        </Styled.ExperienceTitle>
        <Styled.ExperienceCompany>
          {experience.company}
          {(!!experience.start || !!experience.end) && ' '}
          {(!!experience.start || !!experience.end) && (
            <Styled.ExperienceTenure>
              {experience.start === experience.end
                ? `(${experience.start})`
                : `(${experience.start}-${experience.end})`}
            </Styled.ExperienceTenure>
          )}
        </Styled.ExperienceCompany>
      </Styled.ExperienceHeadingColumn>
    </Styled.ExperienceHeading>

    <Styled.Description>{experience.description}</Styled.Description>
  </Styled.Experience>
)

export default ResumeExperience
