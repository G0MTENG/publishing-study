import { useMediaQuery } from 'react-responsive'
import type { PropsWithChildren } from 'react'

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

function App() {
  return (
    <>
      <Desktop></Desktop>
      <Tablet></Tablet>
      <Mobile></Mobile>
    </>
  )
}

export default App
