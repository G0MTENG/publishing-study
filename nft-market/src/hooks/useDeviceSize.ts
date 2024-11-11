import { useMediaQuery } from 'react-responsive'
import { Breakpoints } from '@/constants'

export const useDeviceSize = (): Breakpoints => {
  // break point는 1423으로 잡았다. (610 + 533 + 140 + 140)
  // 직관적으로 이렇게 피그마상 고정 픽셀을 사용하는 것보다는 가변적으로 반응형으로 구현하는 것이 더 옳바른건 알겠으나
  // 이걸 어떻게 레이아웃을 설정하고, 개발해야 할지 감이 잘 안 잡혔습니다.
  // 기존에는 CSS breakpoint 2024 이렇게 해서 브레이크 포인트를 잡아봤는데 개발하다보니 좀 불편한 점이 있었습니다.
  const isLarge = useMediaQuery({ minWidth: 1423 })
  const isSmall = useMediaQuery({ maxWidth: 639 })

  if (isLarge) return 'large'
  else if (isSmall) return 'small'
  else return 'medium'
}
