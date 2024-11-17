import styled from 'styled-components'
import { FlexColumn, WorkSans } from '../atoms'
import { SearchInput } from '../modules/SearchInput'

const Container = styled.div<{ padding: string }>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.text1};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Desktop = () => {
  return (
    <Container padding={'80px 115px'}>
      <FlexColumn gap={10}>
        <WorkSans.H2>Browse Marketplace</WorkSans.H2>
        <WorkSans.Text>Browse through more than 50k NFTs on the NFT Marketplace.</WorkSans.Text>
      </FlexColumn>
      <SearchInput />
    </Container>
  )
}

const Tablet = () => {
  return (
    <Container padding='60px 77px'>
      <FlexColumn gap={10}>
        <WorkSans.H3>Browse Marketplace</WorkSans.H3>
        <WorkSans.Text>Browse through more than 50k NFTs on the NFT Marketplace.</WorkSans.Text>
      </FlexColumn>
      <SearchInput />
    </Container>
  )
}

const Mobile = () => {
  return (
    <Container padding='40px 30px'>
      <FlexColumn gap={10}>
        <WorkSans.H4>Browse Marketplace</WorkSans.H4>
        <WorkSans.Text>Browse through more than 50k NFTs on the NFT Marketplace.</WorkSans.Text>
      </FlexColumn>
      <SearchInput />
    </Container>
  )
}

export const Headline = {
  Desktop,
  Tablet,
  Mobile,
}
