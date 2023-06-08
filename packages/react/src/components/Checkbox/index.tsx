import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as S from './styles'

export type CheckboxProps = ComponentProps<typeof S.Container>

export const Checkbox = (props: CheckboxProps) => {
  return (
    <S.Container {...props}>
      <S.Indicator asChild>
        <Check weight="bold" />
      </S.Indicator>
    </S.Container>
  )
}

Checkbox.displayName = 'Checkbox'
