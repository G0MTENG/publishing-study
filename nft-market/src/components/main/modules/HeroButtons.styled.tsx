import { media } from '@/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 415px;
  height: 44px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  ${media.small`
    width: 100%;
    height: 29px;
    margin: 24px 0;
  `}
`

export const Button = styled.button<{ color: string }>`
  width: 100%;
  height: 100%;
  padding: 8px 0;
  border-radius: 24px;
  background-color: ${(props) => props.color};
  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
