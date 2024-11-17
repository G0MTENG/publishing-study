import styled from 'styled-components'
import { Flex, FlexBetween, FlexColumn, Icon, SpaceMono, WorkSans } from '../atoms'
import { colors } from '@/themes/colors'

const Container = styled.div<{ padding: string }>`
  background-color: ${(props) => props.theme.colors.text1};
  display: flex;
  gap: 30px;
  flex-direction: column;
  padding: ${(props) => props.padding};
`

const Hr = styled.hr`
  border: 1px solid #858584;
  margin: 20px 0 30px;
`

const colorStyle = {
  color: '#CCCCCC',
}

const Desktop = () => {
  return (
    <Container padding='40px 115.29px'>
      <FlexBetween>
        <div>
          <Flex gap={12}>
            <Icon icon='Storefront' size={24} color={colors.action} />
            <SpaceMono.H5>NFT Marketplace</SpaceMono.H5>
          </Flex>
          <FlexColumn
            gap={20}
            style={{
              margin: '30px 0 15px',
            }}
          >
            <WorkSans.Text style={{ ...colorStyle }}>
              NFT marketplace UI created with Anima for Figma.
            </WorkSans.Text>
            <WorkSans.Text style={{ ...colorStyle }}>Join our community</WorkSans.Text>
          </FlexColumn>
          <Flex gap={10} style={{ marginTop: '15px' }}>
            <Icon icon='Discord' color='#CCCCCC' />
            <Icon icon='Youtube' color='#CCCCCC' />
            <Icon icon='Twitter' color='#CCCCCC' />
            <Icon icon='Instagram' color='#CCCCCC' />
          </Flex>
        </div>
        <div>
          <SpaceMono.H5>Explore</SpaceMono.H5>
          <FlexColumn
            gap={20}
            style={{
              marginTop: '25px',
            }}
          >
            <WorkSans.Text style={{ ...colorStyle }}>Marketplace</WorkSans.Text>
            <WorkSans.Text style={{ ...colorStyle }}>Rankings</WorkSans.Text>
            <WorkSans.Text style={{ ...colorStyle }}>Connect a wallet</WorkSans.Text>
          </FlexColumn>
        </div>
        <div>
          <SpaceMono.H5>Join Our Weekly Digest</SpaceMono.H5>
          <WorkSans.Text style={{ ...colorStyle }}>
            Get exclusive promotions & updates straight to your inbox.
          </WorkSans.Text>
        </div>
      </FlexBetween>
      <Hr />
      <WorkSans.Caption style={{ ...colorStyle }}>
        Ⓒ NFT Market. Use this template freely.
      </WorkSans.Caption>
    </Container>
  )
}

const Tablet = () => {
  return (
    <Container padding='40px 72px'>
      <FlexColumn>
        <Flex gap={12}>
          <Icon icon='Storefront' size={24} color={colors.action} />
          <SpaceMono.H5>NFT Marketplace</SpaceMono.H5>
        </Flex>
        <FlexColumn
          gap={20}
          style={{
            margin: '20px 0 15px',
          }}
        >
          <WorkSans.Text style={{ ...colorStyle }}>
            NFT marketplace UI created with Anima for Figma.
          </WorkSans.Text>
          <WorkSans.Text style={{ ...colorStyle }}>Join our community</WorkSans.Text>
        </FlexColumn>
        <Flex gap={10} style={{ marginTop: '15px' }}>
          <Icon icon='Discord' color='#CCCCCC' />
          <Icon icon='Youtube' color='#CCCCCC' />
          <Icon icon='Twitter' color='#CCCCCC' />
          <Icon icon='Instagram' color='#CCCCCC' />
        </Flex>
      </FlexColumn>
      <FlexColumn>
        <SpaceMono.H5>Explore</SpaceMono.H5>
        <FlexColumn
          gap={20}
          style={{
            marginTop: '25px',
          }}
        >
          <WorkSans.Text style={{ ...colorStyle }}>Marketplace</WorkSans.Text>
          <WorkSans.Text style={{ ...colorStyle }}>Rankings</WorkSans.Text>
          <WorkSans.Text style={{ ...colorStyle }}>Connect a wallet</WorkSans.Text>
        </FlexColumn>
      </FlexColumn>
      <FlexColumn gap={20}>
        <SpaceMono.H5>Join Our Weekly Digest</SpaceMono.H5>
        <WorkSans.Text style={{ ...colorStyle }}>
          Get exclusive promotions & updates straight to your inbox.
        </WorkSans.Text>
      </FlexColumn>
      <Hr />
      <WorkSans.Caption style={{ ...colorStyle }}>
        Ⓒ NFT Market. Use this template freely.
      </WorkSans.Caption>
    </Container>
  )
}

const Mobile = () => {
  return (
    <Container padding='40px 30px'>
      <FlexColumn>
        <Flex gap={12}>
          <Icon icon='Storefront' size={24} color={colors.action} />
          <SpaceMono.H5>NFT Marketplace</SpaceMono.H5>
        </Flex>
        <FlexColumn
          gap={20}
          style={{
            margin: '20px 0 15px',
          }}
        >
          <WorkSans.Text style={{ ...colorStyle }}>
            NFT marketplace UI created with Anima for Figma.
          </WorkSans.Text>
          <WorkSans.Text style={{ ...colorStyle }}>Join our community</WorkSans.Text>
        </FlexColumn>
        <Flex gap={10} style={{ marginTop: '15px' }}>
          <Icon icon='Discord' color='#CCCCCC' />
          <Icon icon='Youtube' color='#CCCCCC' />
          <Icon icon='Twitter' color='#CCCCCC' />
          <Icon icon='Instagram' color='#CCCCCC' />
        </Flex>
      </FlexColumn>
      <FlexColumn>
        <SpaceMono.H5>Explore</SpaceMono.H5>
        <FlexColumn
          gap={20}
          style={{
            marginTop: '25px',
          }}
        >
          <WorkSans.Text style={{ ...colorStyle }}>Marketplace</WorkSans.Text>
          <WorkSans.Text style={{ ...colorStyle }}>Rankings</WorkSans.Text>
          <WorkSans.Text style={{ ...colorStyle }}>Connect a wallet</WorkSans.Text>
        </FlexColumn>
      </FlexColumn>
      <FlexColumn gap={20}>
        <SpaceMono.H5>Join Our Weekly Digest</SpaceMono.H5>
        <WorkSans.Text style={{ ...colorStyle }}>
          Get exclusive promotions & updates straight to your inbox.
        </WorkSans.Text>
      </FlexColumn>
      <Hr />
      <WorkSans.Caption style={{ ...colorStyle }}>
        Ⓒ NFT Market. Use this template freely.
      </WorkSans.Caption>
    </Container>
  )
}

export const Footer = {
  Desktop,
  Tablet,
  Mobile,
}
