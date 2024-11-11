import { Caption, H4, H5, Text, useDeviceSizeContext } from '@/components/atoms'
import * as S from './HeroActiveUser.styled'
import { Profiles } from './Profiles'

export const HeroActiveUsers = () => {
  const size = useDeviceSizeContext()

  return (
    <S.Wrapper>
      <Profiles />
      <S.Users>
        {size === 'small' ? <H5>12k</H5> : <H4>12k</H4>}
        {size === 'small' ? <Caption>12k</Caption> : <Text>12k</Text>}
      </S.Users>
    </S.Wrapper>
  )
}
