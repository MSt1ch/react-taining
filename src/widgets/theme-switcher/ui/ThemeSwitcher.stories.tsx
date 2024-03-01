import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'Widget/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    // @ts-ignore
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
