import { media } from '@/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 161px;
  height: 161px;
  background-color: rgba(103, 105, 111, 0.5);
  color: ${(props) => props.theme.nuteral5};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  ${media.large`
    top: 59px;
    right: 143px;
  `}

  ${media.medium`
    bottom: 31px;
    right: 51px;
  `}

  ${media.small`
    width: 92px;
    height: 112px;
    top: 9px;
    right: 18px;
  `}
`
