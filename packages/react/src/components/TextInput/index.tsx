import { ComponentProps, forwardRef, ElementRef } from 'react'
import * as S from './styles'

export type TextInputProps = ComponentProps<typeof S.Input> & {
  prefix?: string
  size?: 'sm' | 'md'
}

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ size, prefix, ...props }: TextInputProps, ref) => {
    return (
      <S.Container size={size}>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.Container>
    )
  },
)

TextInput.displayName = 'TextInput'
