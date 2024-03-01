import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';
import { Loader } from './Loader';

const meta = {
  title: 'Shared/Loader',
  component: Loader,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    // @ts-ignore
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
