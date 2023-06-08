import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  resize: 'vertical',
  minHeight: 80,

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',

  transitionDuration: '0.25s',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: '$regular',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea> & {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
