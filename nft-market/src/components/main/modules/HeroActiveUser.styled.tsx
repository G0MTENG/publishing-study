import { media } from '@/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: rgba(103, 105, 111, 0.5);
  backdrop-filter: blur(6px);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  ${media.large`
    width: 282px;
    height: 90px;
    gap: 40px;
    right: 233px;
    bottom: 95px;
  `}

  ${media.medium`
    width: 254px;
    height: 90px;
    gap: 12px;
    left: 74px;
    bottom: -45px;
  `}

  ${media.small`
    width: 192px;
    height: 57px;
    gap: 8px;
    left: 32px;
    bottom: 12px;
  `}
`

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.nuteral4};

  ${media.small`
    gap: 2px;
  `}
`
