import { Caption, Icon, Text, useDeviceSizeContext } from '@/components/atoms'
import * as S from './HeroButtons.styled'
import { Colors } from '@/theme/colors'

export const HeroButtons = () => {
  const size = useDeviceSizeContext()
  return (
    <S.Wrapper>
      <S.Button color={Colors.purple2}>
        {size !== 'small' && <Text style={{ color: Colors.nuteral5 }}>Discover now</Text>}
        {size === 'small' && <Caption style={{ color: Colors.nuteral5 }}>Discover now</Caption>}
        <Icon.ArrowNarrowRight color={Colors.nuteral5} size={size === 'small' ? 12 : 24} />
      </S.Button>
      <S.Button color={Colors.nuteral5} style={{ border: `1px solid ${Colors.purple1}` }}>
        <Icon.Diamond size={size === 'small' ? 12 : 24} />
        {size !== 'small' && <Text style={{ color: Colors.purple1 }}>Create your own</Text>}
        {size === 'small' && <Caption style={{ color: Colors.purple1 }}>Create your own</Caption>}
      </S.Button>
    </S.Wrapper>
  )
}
