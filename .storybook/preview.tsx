import React from 'react';
import type { Preview } from '@storybook/react';
import { FinProvider } from '../src/components/FinProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => <React.StrictMode>
    <FinProvider>{Story()}</FinProvider>
  </React.StrictMode>],
};

export default preview;
