import { useDeviceSizeContext } from '@/components/atoms'
import React, { PropsWithChildren, ComponentType } from 'react'

type UseSelectResponsiveComponentType = {
  small: ComponentType<PropsWithChildren<unknown>>
  medium: ComponentType<PropsWithChildren<unknown>>
  large: ComponentType<PropsWithChildren<unknown>>
}

export const useSelectResponsiveComponent = ({
  small,
  medium,
  large,
}: UseSelectResponsiveComponentType) => {
  const size = useDeviceSizeContext()

  const SelectComponent: React.FC<PropsWithChildren<Record<string, unknown>>> = (
    props: PropsWithChildren<Record<string, unknown>>,
  ) => {
    switch (size) {
      case 'small':
        return React.createElement(small, props)
      case 'medium':
        return React.createElement(medium, props)
      default:
        return React.createElement(large, props)
    }
  }

  return SelectComponent
}
