import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui-jx/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est enim sit sapiente. Nemo sed quis, assumenda porro tempore, sapiente dolores maiores voluptas molestiae eaque odio architecto esse quod consequatur!',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
