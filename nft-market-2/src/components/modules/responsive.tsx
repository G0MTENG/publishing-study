import { PropsWithChildren } from 'react'
import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  return isDesktop ? children : null
}

export const Tablet = ({ children }: PropsWithChildren) => {
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1279 })
  return isTablet ? children : null
}

export const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery({ maxWidth: 833 })
  return isMobile ? children : null
}
