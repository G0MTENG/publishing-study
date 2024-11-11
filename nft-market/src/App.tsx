import { PageLayout, useDeviceSizeContext } from './components/atoms'
import { Footer, Header, Main } from './components'

function App() {
  const size = useDeviceSizeContext()

  return (
    <>
      <PageLayout padding={size === 'small' ? 27 : 140}>
        <Header />
        <Main />
      </PageLayout>
      <Footer />
    </>
  )
}

export default App
