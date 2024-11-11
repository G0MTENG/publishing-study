import { SocialIcon } from '@/components/atoms'
import * as S from './SocialIcons.styled'

export const SocialIcons = () => {
  return (
    <S.SocialIconsWrapper>
      <li>
        <SocialIcon.Instagram />
      </li>
      <li>
        <SocialIcon.Twitter />
      </li>
      <li>
        <SocialIcon.Linkin />
      </li>
      <li>
        <SocialIcon.Youtube />
      </li>
    </S.SocialIconsWrapper>
  )
}
