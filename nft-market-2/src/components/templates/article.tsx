import { colors } from '@/themes/colors'
import {
  Avartar,
  Flex,
  FlexBetween,
  FlexColumn,
  Icon,
  PaddingContainer,
  SpaceMono,
  Tag,
  WorkSans,
} from '../atoms'
import { Timer } from '../modules'

const longText =
  "The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,\n\nThere are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.\n\nThey live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target."

const Desktop = () => {
  return (
    <PaddingContainer padding='40px 72px'>
      <FlexBetween style={{ alignItems: 'start' }}>
        <FlexColumn gap={30} style={{ width: '605px' }}>
          <FlexColumn gap={10}>
            <WorkSans.H2>The Orbitians</WorkSans.H2>
            <WorkSans.Text style={{ color: colors.text3 }}>Minted on Sep 30, 2022</WorkSans.Text>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.H5 style={{ color: colors.text3 }}>Created By</SpaceMono.H5>
            <Flex gap={12}>
              <Avartar />
              <WorkSans.H5>Orbitian</WorkSans.H5>
            </Flex>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.H5 style={{ color: colors.text3 }}>Description</SpaceMono.H5>
            <WorkSans.Text style={{ whiteSpace: 'pre-wrap' }}>{longText}</WorkSans.Text>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.H5 style={{ color: colors.text3 }}>Details</SpaceMono.H5>
            <Flex gap={10}>
              <Icon icon='Globe' color={colors.text3} />
              <WorkSans.Text>View on Etherscan</WorkSans.Text>
            </Flex>
            <Flex gap={10}>
              <Icon icon='Globe' color={colors.text3} />
              <WorkSans.Text>View Original</WorkSans.Text>
            </Flex>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.H5 style={{ color: colors.text3 }}>Tags</SpaceMono.H5>
            <FlexBetween>
              <Tag>Animation</Tag>
              <Tag>illustration</Tag>
              <Tag>moon</Tag>
              <Tag>moonmoon</Tag>
            </FlexBetween>
          </FlexColumn>
        </FlexColumn>
        <Timer width='295px' />
      </FlexBetween>
    </PaddingContainer>
  )
}

const Tablet = () => {
  return (
    <PaddingContainer padding='40px 115px'>
      <FlexBetween style={{ alignItems: 'start' }}>
        <FlexColumn gap={30} style={{ width: '365px' }}>
          <FlexColumn gap={10}>
            <WorkSans.H3>The Orbitians</WorkSans.H3>
            <WorkSans.Text style={{ color: colors.text3 }}>Minted on Sep 30, 2022</WorkSans.Text>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.Text style={{ color: colors.text3 }}>Created By</SpaceMono.Text>
            <Flex gap={12}>
              <Avartar />
              <WorkSans.Text>Orbitian</WorkSans.Text>
            </Flex>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.Text style={{ color: colors.text3 }}>Description</SpaceMono.Text>
            <WorkSans.Text style={{ whiteSpace: 'pre-wrap' }}>{longText}</WorkSans.Text>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.Text style={{ color: colors.text3 }}>Details</SpaceMono.Text>
            <Flex gap={10}>
              <Icon icon='Globe' color={colors.text3} />
              <WorkSans.Text>View on Etherscan</WorkSans.Text>
            </Flex>
            <Flex gap={10}>
              <Icon icon='Globe' color={colors.text3} />
              <WorkSans.Text>View Original</WorkSans.Text>
            </Flex>
          </FlexColumn>
          <FlexColumn gap={10}>
            <SpaceMono.Text style={{ color: colors.text3 }}>Tags</SpaceMono.Text>
            <FlexColumn gap={20}>
              <Tag>Animation</Tag>
              <Tag>illustration</Tag>
              <Tag>moon</Tag>
              <Tag>moonmoon</Tag>
            </FlexColumn>
          </FlexColumn>
        </FlexColumn>
        <Timer width='295px' />
      </FlexBetween>
    </PaddingContainer>
  )
}

const Mobile = () => {
  return (
    <PaddingContainer padding='40px 30px'>
      <FlexColumn gap={20}>
        <FlexColumn gap={10}>
          <WorkSans.H3>The Orbitians</WorkSans.H3>
          <WorkSans.Text style={{ color: colors.text3 }}>Minted on Sep 30, 2022</WorkSans.Text>
        </FlexColumn>
        <Timer width='100%' />
        <FlexColumn gap={10}>
          <SpaceMono.Text style={{ color: colors.text3 }}>Created By</SpaceMono.Text>
          <Flex gap={12}>
            <Avartar />
            <WorkSans.Text>Orbitian</WorkSans.Text>
          </Flex>
        </FlexColumn>
        <FlexColumn gap={10}>
          <SpaceMono.Text style={{ color: colors.text3 }}>Description</SpaceMono.Text>
          <WorkSans.Text style={{ whiteSpace: 'pre-wrap' }}>{longText}</WorkSans.Text>
        </FlexColumn>
        <FlexColumn gap={10}>
          <SpaceMono.Text style={{ color: colors.text3 }}>Details</SpaceMono.Text>
          <Flex gap={10}>
            <Icon icon='Globe' color={colors.text3} />
            <WorkSans.Text>View on Etherscan</WorkSans.Text>
          </Flex>
          <Flex gap={10}>
            <Icon icon='Globe' color={colors.text3} />
            <WorkSans.Text>View Original</WorkSans.Text>
          </Flex>
        </FlexColumn>
        <FlexColumn gap={10}>
          <SpaceMono.Text style={{ color: colors.text3 }}>Tags</SpaceMono.Text>
          <FlexColumn gap={20}>
            <Tag>Animation</Tag>
            <Tag>illustration</Tag>
            <Tag>moon</Tag>
            <Tag>moon</Tag>
          </FlexColumn>
        </FlexColumn>
      </FlexColumn>
    </PaddingContainer>
  )
}

export const Article = {
  Desktop,
  Tablet,
  Mobile,
}
