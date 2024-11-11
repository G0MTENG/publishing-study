import { H1, H2, H5, Text, Text2 } from '@/components/atoms'
import { media } from '@/constants'
import { Colors } from '@/theme/colors'
import styled from 'styled-components'

const title = 'Explore Unique Digital Art and Collectibles'
const subtitle =
  'Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut. Eu dictum nisi facilisis non habitant senectus eget sollicitudin.'

const textColor = { color: Colors.nuteral5 }

const SmallHeroContent = () => {
  return (
    <>
      <H5 style={{ width: '170px', ...textColor }}>{title}</H5>
      <Text2 style={{ width: '170px', ...textColor }}>{subtitle}</Text2>
    </>
  )
}

const MediumHeroContent = () => {
  return (
    <>
      <H2 style={{ ...textColor }}>{title}</H2>
      <Text style={{ width: '70%', ...textColor }}>{subtitle}</Text>
    </>
  )
}

const LargeHeroContent = () => {
  return (
    <>
      <H1 style={{ width: '847px', ...textColor }}>{title}</H1>
      <Text style={{ width: '533px', ...textColor }}>{subtitle}</Text>
    </>
  )
}

export const HeroContents = {
  small: SmallHeroContent,
  medium: MediumHeroContent,
  large: LargeHeroContent,
}
