import { H5, Profile, Text, Text2 } from '@/components/atoms'
import { media } from '@/constants'
import { themePropsType } from '@/theme'
import { Colors } from '@/theme/colors'
import styled, { CSSProperties } from 'styled-components'

type ListItemsProps = {
  direction?: 'row' | 'column'
  gap?: number
}

const ListItems = styled.ul<ListItemsProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  gap: ${(props) => props.gap ?? 12}px;
`

type ListItemProps = {
  style?: CSSProperties
  color?: string
  flex?: boolean
  children: React.ReactNode
}

const ListItem = styled.li<Pick<ListItemProps, 'flex' | 'style'>>`
  ${(props) =>
    props.flex &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  ${(props) => props.style && { ...props.style }}
`

const ListTitleItem = ({
  style,
  children,
  flex = false,
  color = Colors.purple2,
}: ListItemProps) => {
  return (
    <ListItem flex={flex} style={style}>
      <H5 style={{ color }}>{children}</H5>
    </ListItem>
  )
}

const ListTextItem = ({ style, children, flex = false, color = Colors.black1 }: ListItemProps) => {
  return (
    <ListItem flex={flex} style={style}>
      <Text style={{ color }}>{children}</Text>
    </ListItem>
  )
}

const ListSmallTextItem = ({
  style,
  children,
  flex = false,
  color = Colors.black1,
}: ListItemProps) => {
  return (
    <ListItem flex={flex} style={style}>
      <Text2 style={{ color }}>{children}</Text2>
    </ListItem>
  )
}

type ListIconItemProps = { size?: number; padding?: number; color?: string }
const ListIconItem = styled.li<ListIconItemProps>`
  width: ${(props) => props.size ?? 44}px;
  height: ${(props) => props.size ?? 44}px;
  border-radius: 8px;
  padding: ${(props) => props.padding ?? 10}px;
  background-color: ${(props) => props.color ?? props.theme.nuteral4};
`

type ListAccountItemProps = { width?: number; height?: number; size: number; src: string }
const ListAccountWrapper = styled.li<Pick<ListAccountItemProps, 'width' | 'height'>>`
  width: ${(props) => props.width ?? `141px`};
  height: ${(props) => props.height ?? `44px`};
  border-radius: 50px;
  padding-left: 12px;
  background-color: ${(props) => props.theme.nuteral4};
  color: ${(props) => props.theme.purple1};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListAccountItem = ({ width, height, size, src }: ListAccountItemProps) => {
  return (
    <ListAccountWrapper width={width} height={height}>
      <Text style={{ flex: '1', textAlign: 'center' }}>Account</Text>
      <Profile size={size} src={src} />
    </ListAccountWrapper>
  )
}

type ListProfileItemProps = { url: string; index: number }
const ListProfileItem = styled.div<ListProfileItemProps>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  margin-left: ${(props) => (props.index !== 0 ? `-16px` : ``)};
  z-index: ${(props) => props.index};

  ${media.small`
    width: 32px;
    height: 32px;
    border: 1px solid ${(props: themePropsType) => props.theme.success2};
    margin-left: ${(props: ListProfileItemProps) => (props.index !== 0 ? `-9.5px` : ``)};
  `};
`

export const List = {
  ListItems,
  ListTitleItem,
  ListTextItem,
  ListSmallTextItem,
  ListIconItem,
  ListAccountItem,
  ListProfileItem,
}
