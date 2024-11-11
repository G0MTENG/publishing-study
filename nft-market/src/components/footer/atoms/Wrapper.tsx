import { media } from '@/constants'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.black2};

  ${media.small`
    padding: 24px
  `}
  ${media.medium`
    padding: 24px
  `}
  ${media.large`
    padding: 24px
  `}
`
