import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/theme-provider';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
};

export default preview;
