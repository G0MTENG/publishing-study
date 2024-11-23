import styled from 'styled-components'

export const Grid = styled.div<{ row: number; gap?: { row?: string; col?: string } }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.row}, 1fr);
  row-gap: ${(props) => props.gap?.row ?? '30px'};
  column-gap: ${(props) => props.gap?.col ?? '30px'};
`
