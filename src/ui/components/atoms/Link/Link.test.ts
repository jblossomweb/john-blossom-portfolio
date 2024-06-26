import storySnaps from 'test/utils/storySnaps'
import * as stories from './Link.stories'

const path = __dirname.split('/src/')[1]

describe(path, () => {
  describe('stories', () => {
    storySnaps(stories)
  })
})
