import { Logo } from '@/components/modules'
import styled from 'styled-components'
import { SearchTextField } from '../modules'

const LargeWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
`

const SmallLeftHeader = () => {
  return <Logo.Small />
}

const MediumHeader = () => {
  return <Logo.Default />
}

const LargeHeader = () => {
  return (
    <LargeWrapper>
      <Logo.Default />
      <SearchTextField />
    </LargeWrapper>
  )
}

export const leftHeaders = {
  small: SmallLeftHeader,
  medium: MediumHeader,
  large: LargeHeader,
}
