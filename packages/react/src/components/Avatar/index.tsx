import { ComponentProps } from 'react'
import * as S from './styles'
import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof S.Image>

export const Avatar = (props: AvatarProps) => {
  return (
    <S.Container>
      <S.Image {...props} />
      <S.Fallback delayMs={600}>
        <User />
      </S.Fallback>
    </S.Container>
  )
}
