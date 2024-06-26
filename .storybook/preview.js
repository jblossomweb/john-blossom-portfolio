import '../src/ui/globals.css'

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
}

export const decorators = [(Story) => <Story />]
export const tags = ['autodocs', 'autodocs']
