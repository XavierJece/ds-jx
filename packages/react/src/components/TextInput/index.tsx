import { ComponentProps } from 'react'
import * as S from './styles'

export type TextInputProps = ComponentProps<typeof S.Input> & {
  prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <S.Container>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.Container>
  )
}
