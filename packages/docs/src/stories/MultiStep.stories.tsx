import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@designer-jx/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
