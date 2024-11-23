import { useMediaQuery } from 'react-responsive'
import type { PropsWithChildren } from 'react'
import { BannerImage, Footer, Header, Artists, Article } from './components/templates'

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

export const Week3 = () => {
  return (
    <>
      <Desktop>
        <Header.Desktop />
        <BannerImage.Desktop />
        <Article.Desktop />
        <Artists.Desktop />
        <Footer.Desktop />
      </Desktop>
      <Tablet>
        <Header.Tablet />
        <BannerImage.Tablet />
        <Article.Tablet />
        <Artists.Tablet />
        <Footer.Tablet />
      </Tablet>
      <Mobile>
        <Header.Mobile />
        <BannerImage.Tablet />
        <Article.Mobile />
        <Artists.Mobile />
        <Footer.Mobile />
      </Mobile>
    </>
  )
}
