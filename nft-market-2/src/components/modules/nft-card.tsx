import styled from 'styled-components'
import { FlexColumn, Flex, SpaceMono, WorkSans, FlexBetween } from '../atoms'

const Card = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100%;
  margin: 0 auto;
`

const Image = styled.img`
  width: 100%;
  height: 295px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px 30px 25px;
  border-radius: 0 0 20px 20px;
  background-color: ${(props) => props.theme.colors.text2};
`

const ProfileImage = styled.img`
  width: 24px;
  border-radius: 100%;
`

type NFTCardProps = {
  item: {
    imageUrl: string
    title: string
    profileImageUrl: string
    profile: string
    price: number
    highest: number
  }
}
export const NFTCard = ({ item }: NFTCardProps) => {
  const { imageUrl, title, profileImageUrl, profile, price, highest } = item

  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <ContentWrapper>
        <FlexColumn>
          <WorkSans.H5>{title}</WorkSans.H5>
          <Flex gap={12}>
            <ProfileImage src={profileImageUrl} alt={profile} />
            <SpaceMono.Text>{profile}</SpaceMono.Text>
          </Flex>
        </FlexColumn>
        <FlexBetween>
          <SpaceMono.Caption>Price</SpaceMono.Caption>
          <SpaceMono.Caption>Highest Bid</SpaceMono.Caption>
        </FlexBetween>
        <FlexBetween>
          <SpaceMono.Text>{price} ETH</SpaceMono.Text>
          <SpaceMono.Text>{highest} wETH</SpaceMono.Text>
        </FlexBetween>
      </ContentWrapper>
    </Card>
  )
}
