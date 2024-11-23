import { colors } from '@/themes/colors'
import { Flex, FlexBetween, Icon, SpaceMono, WorkSans } from '../atoms'
import { Button } from '../modules'

const Desktop = () => {
  return (
    <FlexBetween
      style={{
        height: '100px',
        backgroundColor: colors.text1,
        padding: '20px 50px',
      }}
    >
      <Flex gap={12}>
        <Icon icon='Storefront' size={24} color={colors.action} />
        <SpaceMono.H5>NFT Marketplace</SpaceMono.H5>
      </Flex>
      <Flex gap={10}>
        <WorkSans.Text style={{ margin: '12px 20px' }}>Marketplace</WorkSans.Text>
        <WorkSans.Text style={{ margin: '12px 20px' }}>Rankings</WorkSans.Text>
        <WorkSans.Text style={{ margin: '12px 20px' }}>Connect a wallet</WorkSans.Text>
        <Button.Secondary icon='User' text='Sign Up' type='filled' />
      </Flex>
    </FlexBetween>
  )
}

const Tablet = () => {
  return (
    <FlexBetween
      style={{
        height: '54px',
        backgroundColor: colors.text1,
        padding: '15px 50px',
      }}
    >
      <Flex gap={9}>
        <Icon icon='Storefront' size={24} color={colors.action} />
        <SpaceMono.H5>NFT Marketplace</SpaceMono.H5>
      </Flex>
      <Icon icon='List' size={24} />
    </FlexBetween>
  )
}

const Mobile = () => {
  return (
    <FlexBetween
      style={{
        height: '54px',
        backgroundColor: colors.text1,
        padding: '15px 30px',
      }}
    >
      <Flex gap={9}>
        <Icon icon='Storefront' size={24} color={colors.action} />
        <SpaceMono.H5>NFT Marketplace</SpaceMono.H5>
      </Flex>
      <Icon icon='List' size={24} />
    </FlexBetween>
  )
}

export const Header = {
  Desktop,
  Tablet,
  Mobile,
}
