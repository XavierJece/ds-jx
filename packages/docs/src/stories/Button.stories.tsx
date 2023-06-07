import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui-jx/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {},
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
