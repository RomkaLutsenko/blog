import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {},
  args: { 
    children: 'Text',
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },
};

export const Red: Story = {
    args: {
      theme: AppLinkTheme.RED
    },
};

export const PrimaryDark: Story = {
    args: {
      theme: AppLinkTheme.PRIMARY
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)] 
  
export const SecondaryDark: Story = {
    args: {
      theme: AppLinkTheme.SECONDARY
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)] 
  
export const RedDark: Story = {
      args: {
        theme: AppLinkTheme.RED
      },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)] 