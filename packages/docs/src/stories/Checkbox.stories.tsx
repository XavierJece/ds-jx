import { Box, Text, Checkbox, CheckboxProps } from '@designer-jx/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,

  args: {},

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          {Story()}
          <Text>It is a label example </Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const WithPlaceholder: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'It is a placeholder',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<CheckboxProps> = {
  args: {
    prefix: 'my prefix/',
  },
}

export const WithPrefixAndPlaceholder: StoryObj<CheckboxProps> = {
  args: {
    prefix: 'my prefix/',
    placeholder: 'it-is-a-placeholder',
  },
}
