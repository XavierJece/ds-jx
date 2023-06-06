import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui-jx/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the Heading will always be an `h2`, but we can change that with the `as` property.',
      },
    },
  },
}
