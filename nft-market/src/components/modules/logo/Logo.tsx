import { H4, H5, LogoIcon } from '@/components/atoms'
import * as S from './Logo.styles'
import { Colors } from '@/theme/colors'

const Default = () => {
  return (
    <S.DefaultWrapper>
      <LogoIcon.Default />
      <H4 style={{ flex: 1, textAlign: 'center', color: Colors.purple1 }}>NFT Logoplace</H4>
    </S.DefaultWrapper>
  )
}

const Small = () => {
  return (
    <S.SmaillWrapper>
      <LogoIcon.Small />
      <H5 style={{ flex: 1, textAlign: 'center', color: Colors.purple1 }}>NFT Logoplace</H5>
    </S.SmaillWrapper>
  )
}

export const Logo = {
  Default,
  Small,
}
