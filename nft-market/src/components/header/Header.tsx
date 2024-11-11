import { useRenderResponsiveComponents } from '@/hooks'
import { Layout } from './atoms'
import { leftHeaders, rightHeaders } from './templates'

export const Header = () => {
  const LeftHeader = useRenderResponsiveComponents(leftHeaders)
  const RightHeader = useRenderResponsiveComponents(rightHeaders)

  return (
    <Layout>
      <LeftHeader />
      <RightHeader />
    </Layout>
  )
}
