import { useMediaQuery } from 'react-responsive'
import type { PropsWithChildren } from 'react'
import styled from 'styled-components'
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

const AppLayout = styled.div`
  width: 100vw;
`

function App() {
  return (
    <AppLayout>
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
    </AppLayout>
  )
}

export default App
