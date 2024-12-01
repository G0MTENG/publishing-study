import { Desktop, Tablet, Mobile } from '@/components/modules'
import { Headline, Section, Header, MarketPlace, Footer } from '@/components/templates'

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
