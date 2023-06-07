import { ComponentProps } from 'react'
import * as C from './styles'

export type TextInputProps = ComponentProps<typeof C.Input> & {
  prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <C.Container>
      {!!prefix && <C.Prefix>{prefix}</C.Prefix>}
      <C.Input {...props} />
    </C.Container>
  )
}
