import { ComponentProps } from 'react'
import * as S from './styles'

export type MultiStepProps = ComponentProps<typeof S.Container> & {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <S.Container>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>

      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <S.Step key={step} active={currentStep >= step} />
        ))}
      </S.Steps>
    </S.Container>
  )
}
