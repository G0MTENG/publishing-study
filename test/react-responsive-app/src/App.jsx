import './App.css'

import { useMediaQuery } from 'react-responsive'

// eslint-disable-next-line react/prop-types
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1001 }) // 1001px 이상
  return isDesktop ? <>{children}</> : null
}

// eslint-disable-next-line react/prop-types
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1000 }) // 1000px 이하
  return isMobile ? <>{children}</> : null
}

function App() {
  return (
    <>
      <Mobile>
        mobile view
      </Mobile>
      <Desktop>
        pc view
      </Desktop>
    </>
  )
}

export default App