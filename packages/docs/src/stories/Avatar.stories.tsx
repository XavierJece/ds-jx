import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui-jx/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/xavierjece.png',
    alt: 'Jecé Xavier',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
