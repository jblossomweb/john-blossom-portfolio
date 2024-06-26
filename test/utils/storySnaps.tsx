import React from 'react'
import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { render, cleanup } from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: '',
    asPath: '',
  }),
}))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = React.ComponentClass | React.FC<any>

export interface Meta {
  default: StoryMeta<AnyComponent>
}

export interface Stories {
  [story: string]: StoryObj<AnyComponent>
}

const storySnaps = (stories: Stories | Meta) => {
  const { component } = (stories as Meta).default
  const Component = component as React.ComponentClass
  Object.keys(stories)
    .filter((key) => key !== 'default')
    .forEach((key) => {
      describe(key, () => {
        afterEach(cleanup)

        it('matches markup snapshot', () => {
          const { args } = (stories as Stories)[key]
          const { asFragment } = render(<Component {...args} />)
          expect(asFragment()).toMatchSnapshot()
        })
      })
    })
}

export default storySnaps
