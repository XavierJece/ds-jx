import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@designer-jx/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est enim sit sapiente. Nemo sed quis, assumenda porro tempore, sapiente dolores maiores voluptas molestiae eaque odio architecto esse quod consequatur!',
    size: 'md',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
