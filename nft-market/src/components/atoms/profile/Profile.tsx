import styled from 'styled-components'

export const Profile = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.success2};
  object-fit: cover;
`
