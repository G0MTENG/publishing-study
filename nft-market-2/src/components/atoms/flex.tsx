import styled from 'styled-components'

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Flex = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${(props) => props.gap}px;
  align-items: center;
`
