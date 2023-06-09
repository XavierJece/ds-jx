import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@designer-jx/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Default Button',
  },
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        With Icon
        <ArrowRight />
      </>
    ),
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const SecondaryDisable: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary - Disable',
    disabled: true,
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
}

export const TertiaryDisable: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary - Disable',
    disabled: true,
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}
