import React from 'react'
import { render, cleanup } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import Index from './index'
import * as stories from './SkillsPage.stories'

const path = __dirname.split('/src/')[1]

describe(path, () => {
  describe('index', () => {
    afterEach(cleanup)

    it('should render without crashing', () => {
      render(<Index />)
    })
  })

  describe('component', () => {
    describe('stories', () => {
      storySnaps(stories)
    })
  })
})
