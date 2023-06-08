import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui-jx/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento Box</Text>,
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
