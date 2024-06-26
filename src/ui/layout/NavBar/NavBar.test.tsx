import React from 'react'
import storySnaps from 'test/utils/storySnaps'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import NavBar, { type NavBarProps } from './NavBar'
import * as stories from './NavBar.stories'

const path = __dirname.split('/src/')[1]

const utils = {
  getList: () =>
    screen
      .getByRole('navigation')
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector('#navbar ul'),
  getButton: () =>
    screen
      .getByRole('navigation')
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector('button[aria-controls="navbar"]'),
}

describe(path, () => {
  describe('stories', () => {
    storySnaps(stories)
  })

  describe('interaction', () => {
    afterEach(cleanup)

    it('should render without crashing', () => {
      render(<NavBar {...(stories.Sample.args as NavBarProps)} />)
    })

    it('should initialize with navbar closed on mobile', () => {
      render(<NavBar {...(stories.Sample.args as NavBarProps)} />)

      expect(utils.getList()).toHaveClass('hidden')
      expect(utils.getButton()).toHaveAttribute('aria-expanded', 'false')
    })

    it('should open the navbar when clicked on mobile', async () => {
      render(<NavBar {...(stories.Sample.args as NavBarProps)} />)

      expect(utils.getList()).toHaveClass('hidden')
      expect(utils.getButton()).toHaveAttribute('aria-expanded', 'false')

      await userEvent.click(utils.getButton() as Element)

      expect(utils.getList()).not.toHaveClass('hidden')
      expect(utils.getButton()).toHaveAttribute('aria-expanded', 'true')
    })

    it('should close the navbar again when clicked again on mobile', async () => {
      render(<NavBar {...(stories.Sample.args as NavBarProps)} />)

      expect(utils.getList()).toHaveClass('hidden')
      expect(utils.getButton()).toHaveAttribute('aria-expanded', 'false')

      await userEvent.click(utils.getButton() as Element)

      expect(utils.getList()).not.toHaveClass('hidden')
      expect(utils.getButton()).toHaveAttribute('aria-expanded', 'true')

      await userEvent.click(utils.getButton() as Element)

      expect(utils.getList()).toHaveClass('hidden')
      expect(utils.getButton()).toHaveAttribute('aria-expanded', 'false')
    })
  })
})
