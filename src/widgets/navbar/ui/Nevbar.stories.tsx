import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';
import { Navbar } from './Navbar';

const meta = {
  title: 'Widget/Navbar',
  component: Navbar,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    // @ts-ignore
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
