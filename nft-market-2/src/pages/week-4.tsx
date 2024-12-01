import { Desktop, Mobile, Tablet } from '@/components/modules'
import { Footer, Header } from '@/components/templates'
import { Account } from '@/components/templates/acount'

export const Week4 = () => {
  return (
    <>
      <Desktop>
        <Header.Desktop />
        <Account.Desktop />
        <Footer.Desktop />
      </Desktop>
      <Tablet>
        <Header.Tablet />
        <Account.Tablet />
        <Footer.Tablet />
      </Tablet>
      <Mobile>
        <Header.Mobile />
        <Account.Mobile />
        <Footer.Mobile />
      </Mobile>
    </>
  )
}
