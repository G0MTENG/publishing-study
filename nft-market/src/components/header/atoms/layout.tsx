import styled from 'styled-components'
import { media } from '@/constants'

export const Layout = styled.header`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.small`
    height: 74px
  `}
`
