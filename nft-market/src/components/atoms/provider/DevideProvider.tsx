import { Breakpoints } from '@/constants'
import { useDeviceSize } from '@/hooks'
import { createContext, ReactNode, useContext } from 'react'

const DeviceSizeContext = createContext<Breakpoints | undefined>(undefined)

type DeviceSizeProviderProps = {
  children: ReactNode
}

export function DeviceSizeProvider({ children }: DeviceSizeProviderProps) {
  const size = useDeviceSize()

  return <DeviceSizeContext.Provider value={size}>{children}</DeviceSizeContext.Provider>
}

export const useDeviceSizeContext = (): Breakpoints => {
  const context = useContext(DeviceSizeContext)
  if (context === undefined) {
    throw new Error('useDeviceSizeContext must be used within a DeviceSizeProvider')
  }
  return context
}
