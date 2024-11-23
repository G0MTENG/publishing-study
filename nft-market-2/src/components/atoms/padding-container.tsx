import styled from 'styled-components'

export const PaddingContainer = styled.div<{ padding: string }>`
  width: 100%;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.colors.text1};
`
