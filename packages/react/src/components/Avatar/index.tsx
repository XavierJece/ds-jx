import { ComponentProps } from 'react'
import * as S from './styles'
import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof S.AvatarImage>

export const Avatar = (props: AvatarProps) => {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />
      <S.AvatarFallback delayMs={600}>
        <User />
      </S.AvatarFallback>
    </S.AvatarContainer>
  )
}
