import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  padding: '0 $4',
  borderRadius: '$sm',
  minWidth: 120,
  boxSizing: 'border-box',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transitionDuration: '0.25s',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$white',
          background: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
