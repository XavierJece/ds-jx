import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-jx/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>It is a label example </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

export const WithPlaceholder: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'It is a placeholder',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
