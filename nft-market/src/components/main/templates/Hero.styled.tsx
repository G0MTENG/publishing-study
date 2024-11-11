import { media } from '@/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 533px;
  border-radius: 24px;
  margin: 64px 0;
  padding: 122.5px 48px;
  background-image: url('https://s3-alpha-sig.figma.com/img/956b/b98a/ee4be48dd93ac3a64c6b299ea2e7fab4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eu70Z~gIO9WN-G3v-QZo8qkAy1CvmaF4QQrTRei-3FdVz5wNdU5j-oPXY~6WxJDTUZx3uN~rIJgc5IR6CeOvhXdtsio5OgncYwcty4Hu05CQEckcZfQvT2rBjhSMYIYNtKnPf1wNwNZXpx1OY05-XuFv7KF2u0mqoTkMyVpcSl8~vK0xZlu2ZR49ER16HXpsyNNu65w78Hjas6~swayJJZvCkBMxTIpMx2WVZynVXBYKyPFlAUr7J8shbHHFrQVkk4YQx1I9LiQ7x7yHDNnx3P2yxAAUHXH0hJDuXp0PKUS0rAM~~mgE507v5RqZu3AgQAdXNz2hKgqiMybtxVQuZw__');
  background-size: cover;
  background-position: center;
  position: relative;

  ${media.medium`
    padding: 137.5px 48px;
  `}

  ${media.small`
    height: 367px;
    margin: 12px 0;
    padding: 12px 32px;
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.small`
    12px;
  `}
`
