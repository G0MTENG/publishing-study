import styled from 'styled-components'

export const PageLayout = styled.div<{ padding: number }>`
  width: 100%;
  padding: 0 ${(props) => props.padding}px;
`
