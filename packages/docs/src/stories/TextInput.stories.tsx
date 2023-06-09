import { Box, Text, TextInput, TextInputProps } from '@designer-jx/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

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
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const WithPlaceholder: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'It is a placeholder',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'my prefix/',
  },
}

export const WithPrefixAndPlaceholder: StoryObj<TextInputProps> = {
  args: {
    prefix: 'my prefix/',
    placeholder: 'it-is-a-placeholder',
  },
}
