import styled from 'styled-components'
import { FlexBetween, Icon } from '../atoms'
import { colors } from '@/themes/colors'

const Input = styled.input`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  flex-grow: 1;
  color: ${(props) => props.theme.colors.text4};
`

export const SearchInput = () => {
  return (
    <FlexBetween
      style={{
        border: `1px solid ${colors.text2}`,
        borderRadius: '20px',
        padding: '18px 20px',
        gap: '21px',
      }}
    >
      <Input placeholder='Search your favorite NFTs' />
      <Icon icon='MagnifyingGlass' size={24} />
    </FlexBetween>
  )
}
