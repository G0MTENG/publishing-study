import styled from 'styled-components'

type IconButtonPropsType = {
  width: string
  height: string
  color: string
  bg: string
}

export const IconButton = styled.button<IconButtonPropsType>(
  ({ width, height, color, bg }) => `
    width: ${width};
    height: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 20px;
    color: ${color};
    background-color: ${bg};
  `,
)
