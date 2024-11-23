import { useMediaQuery } from 'react-responsive'
import type { PropsWithChildren } from 'react'
import { Footer, Header, Headline, MarketPlace, Section } from './components/templates'

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
