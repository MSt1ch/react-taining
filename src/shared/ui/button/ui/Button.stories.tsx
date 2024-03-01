import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator';
import { Theme } from 'app/providers/theme-provider';
import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
    // padded: 100,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   // @ts-ignore
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUNTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUNTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
