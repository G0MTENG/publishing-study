import { useDeviceSizeContext } from '@/components/atoms'
import { Breakpoints } from '@/constants'

type useRenderResponsiveComponentsProps = Record<Breakpoints, () => JSX.Element>
export const useRenderResponsiveComponents = ({
  small,
  medium,
  large,
}: useRenderResponsiveComponentsProps) => {
  const size = useDeviceSizeContext()

  switch (size) {
    case 'small':
      return small
    case 'medium':
      return medium
    case 'large':
      return large
  }
}
