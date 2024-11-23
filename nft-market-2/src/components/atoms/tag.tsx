import styled from 'styled-components'
import { WorkSans } from './work-sans'
import { PropsWithChildren } from 'react'

const StyledTag = styled.div`
  background-color: ${(props) => props.theme.colors.text2};
  padding: 12px 30px;
  border-radius: 20px;
  width: fit-content;

  div {
    color: ${(props) => props.theme.colors.text4};
  }
`

export const Tag = ({ children }: PropsWithChildren) => {
  return (
    <StyledTag>
      <WorkSans.Text>{children}</WorkSans.Text>
    </StyledTag>
  )
}
