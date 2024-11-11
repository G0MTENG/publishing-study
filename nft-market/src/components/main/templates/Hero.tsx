import { useRenderResponsiveComponents } from '@/hooks'
import * as S from './Hero.styled'
import { HeroContents } from '../modules/HeroContents'
import { HeroActiveUsers, HeroButtons, HeroTotalSale } from '../modules'
import { useDeviceSizeContext } from '@/components/atoms'

export const Hero = () => {
  const size = useDeviceSizeContext()
  const Content = useRenderResponsiveComponents(HeroContents)

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <Content />
          {size !== 'small' && <HeroButtons />}
        </S.ContentWrapper>
        <HeroActiveUsers />
        <HeroTotalSale />
      </S.Wrapper>
      {size === 'small' && <HeroButtons />}
    </>
  )
}
