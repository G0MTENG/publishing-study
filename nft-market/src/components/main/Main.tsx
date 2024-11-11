import { useSelectResponsiveComponent } from '@/hooks'
import { FlexBetween, H3, H4, H5, Text2 } from '../atoms'
import { Button } from './atoms'
import { CommunityCard, TagFilter } from './modules'
import { CreatorCards, Hero, NFTCards } from './templates'

export const Main = () => {
  const Title = useSelectResponsiveComponent({
    large: H3,
    medium: H4,
    small: H5,
  })
  return (
    <>
      <Hero />
      <FlexBetween>
        <Title>Featured NFTs</Title>
      </FlexBetween>
      <NFTCards />
      <Title>Meet Our Talented Creators</Title>
      <CreatorCards />
      <Title>Explore</Title>
      <Text2>
        Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed
        faucibus proin cum ut.
      </Text2>
      <TagFilter />
      <NFTCards />
      <Button>Load More</Button>
      <CommunityCard />
    </>
  )
}
