import { useMediaQuery } from 'react-responsive'
import type { PropsWithChildren } from 'react'
import { Footer, Header, Headline, MarketPlace, Section } from './components/templates'

// CSS Media 쿼리와의 차이점은 js에서 일어나는 것
// SSR 시에 Hydration 중 불일치 문제가 일어날 수 있음.
// React18 useViewportWidth 훅이 있다고 하는데 좀 더 알아보면 좋을거 같음

const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  return isDesktop ? children : null
}
const Tablet = ({ children }: PropsWithChildren) => {
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1279 })
  return isTablet ? children : null
}
const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery({ maxWidth: 833 })
  return isMobile ? children : null
}

export const Week2 = () => {
  return (
    <>
      <Desktop>
        <Header.Desktop />
        <Headline.Desktop />
        <Section.Desktop />
        <MarketPlace.Desktop />
        <Footer.Desktop />
      </Desktop>
      <Tablet>
        <Header.Tablet />
        <Headline.Tablet />
        <Section.Tablet />
        <MarketPlace.Tablet />
        <Footer.Tablet />
      </Tablet>
      <Mobile>
        <Header.Mobile />
        <Headline.Mobile />
        <Section.Mobile />
        <MarketPlace.Mobile />
        <Footer.Mobile />
      </Mobile>
    </>
  )
}
