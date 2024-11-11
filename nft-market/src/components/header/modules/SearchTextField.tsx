import styled from 'styled-components'
import { Icon } from '@/components/atoms'

const SeaerchWrapper = styled.div`
  width: 268px;
  height: 44px;
  background-color: ${(props) => props.theme.nuteral4};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const SearchInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex: 1;
  color: ${(props) => props.theme.black4};
  background-color: ${(props) => props.theme.nuteral4};
  outline: none;
  border: 0;
`

export const SearchTextField = () => {
  return (
    <SeaerchWrapper>
      <Icon.Search />
      <SearchInput placeholder='search' />
    </SeaerchWrapper>
  )
}
