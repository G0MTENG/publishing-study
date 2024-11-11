import { media } from '@/constants'
import styled from 'styled-components'

type ItemsLayoutProps = { gap: number }
export const ItemsLayout = styled.div<ItemsLayoutProps>`
  display: flex;

  ${media.small`
    flex-direction: column; 
    gap: ${(props: ItemsLayoutProps) => props.gap}px;
  `}

  ${media.medium`
    flex-direction: column; 
    gap: ${(props: ItemsLayoutProps) => props.gap}px;
  `}

  ${media.large`
    justify-content: space-between; 
    align-items: center;
  `};
`
