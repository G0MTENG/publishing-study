import { Hr, Text } from '@/components/atoms'
import { List, Logo } from '@/components/modules'
import { SocialIcons } from './modules'
import { ItemsLayout, Wrapper } from './atoms'
import styled from 'styled-components'
import { media } from '@/constants'
import { Colors } from '@/theme/colors'

const FooterText = styled.div`
  width: 390px;
  height: 92px;
  padding: 10px;

  color: ${(props) => props.theme.nuteral5};
  ${media.small`
    width: 327px;
    height: 72px;
  `};
`

export const Footer = () => {
  return (
    <Wrapper>
      <ItemsLayout gap={20}>
        <Logo.Default />
        <SocialIcons />
      </ItemsLayout>
      <Hr />
      <ItemsLayout gap={25}>
        <FooterText>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed
            faucibus proin cum ut.
          </Text>
        </FooterText>
        <List.ListItems direction={'column'} gap={8}>
          <List.ListTitleItem>Explore</List.ListTitleItem>
          {['home', 'Collection', 'Conect a wallet', 'Ranking'].map((text, index) => (
            <List.ListSmallTextItem
              key={index}
              style={{ width: '140px', height: '20px' }}
              color={Colors.nuteral5}
            >
              {text}
            </List.ListSmallTextItem>
          ))}
        </List.ListItems>
        <List.ListItems direction={'column'} gap={8}>
          <List.ListTitleItem>Links</List.ListTitleItem>
          {['Blog', 'Contact', 'FAQ’s', 'About us'].map((text, index) => (
            <List.ListSmallTextItem
              key={index}
              style={{ width: '140px', height: '20px' }}
              color={Colors.nuteral5}
            >
              {text}
            </List.ListSmallTextItem>
          ))}
        </List.ListItems>
      </ItemsLayout>
    </Wrapper>
  )
}
