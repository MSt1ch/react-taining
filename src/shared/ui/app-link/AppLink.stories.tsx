import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    // @ts-ignore
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
