import { Caption, H4, H5, Icon, Text, useDeviceSizeContext } from '@/components/atoms'
import * as S from './HeroTotalSale.styled'

export const HeroTotalSale = () => {
  const size = useDeviceSizeContext()

  return (
    <S.Wrapper>
      <Icon.Sales />
      {size === 'small' ? <H5>160K</H5> : <H4>160K</H4>}
      {size === 'small' ? <Caption>Total sales</Caption> : <Text>Total sales</Text>}
    </S.Wrapper>
  )
}
