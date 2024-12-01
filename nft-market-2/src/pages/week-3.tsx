import { Desktop, Mobile, Tablet } from '@/components/modules'
import { Article, Artists, BannerImage, Footer, Header } from '@/components/templates'

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
