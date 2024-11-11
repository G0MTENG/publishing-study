import { Icon } from '@/components/atoms'
import { List } from '@/components/modules'
import styled from 'styled-components'

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  padding: 10px;
  background-color: ${(props) => props.theme.nuteral4};
`

const HamburgerIcon = () => {
  return (
    <IconWrapper>
      <Icon.Menu />
    </IconWrapper>
  )
}

const LargeRightHeader = () => {
  return (
    <List.ListItems>
      <List.ListTextItem flex style={{ width: '85px', height: '44px', padding: '10px' }}>
        Home
      </List.ListTextItem>
      <List.ListTextItem flex style={{ width: '85px', height: '44px', padding: '10px' }}>
        Brows
      </List.ListTextItem>
      <List.ListTextItem flex style={{ width: '85px', height: '44px', padding: '10px' }}>
        Create
      </List.ListTextItem>
      <List.ListTextItem flex style={{ width: '85px', height: '44px', padding: '10px' }}>
        {'MyNFT’s'}
      </List.ListTextItem>
      <List.ListIconItem>
        <Icon.ActiveBell />
      </List.ListIconItem>
      <List.ListAccountItem
        size={44}
        src='https://s3-alpha-sig.figma.com/img/3905/ad13/f4372adca52137c361e0b489811864af?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwdB6r-S~F2lhMAMh~Zt8RUOnks97Tg7i-ssYIBlLXmEFalsAD3WdtISoTTVJd8JVFoABKZIs4BK8Qx-T5l~PnSNa-B7y5tF3-XzaKNxUk6ZZ7q58eIBkJPzSB5CMQOoaPPVCepIQ-kkMMKIyq~GABEki~7qkQBtXNQLA0yg8bHyuECTRxpZSNAfsNw56k5iiJLRPHLzgBhzxMM-COHZ4lB1br-kKjp4KAhMlElRuXHG-3rT6nKrmj7VrZQubZs8MfWANNYMkBvhxfWACXaugI07~9jfMg2LOex9QaMXfpSGVwPS~fSKSI28VZJFpkxXBEOXL5K9vBNDpChB6B0ZXQ__'
      />
    </List.ListItems>
  )
}

export const rightHeaders = {
  small: HamburgerIcon,
  medium: HamburgerIcon,
  large: LargeRightHeader,
}
