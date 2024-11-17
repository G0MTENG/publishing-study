import styled from 'styled-components'
import { Icon, IconMap, WorkSans } from '../atoms'
import { colors } from '@/themes/colors'

const filledStyle = {
  backgroundColor: colors.action,
}
const outlinedStyle = {
  border: `1px solid ${colors.action}`,
}
const Style = {
  filled: filledStyle,
  outlined: outlinedStyle,
}
interface IButtonProp {
  icon: IconMap
  text: string
  type: keyof typeof Style
}

const ButtonStyle = styled.button`
  color: ${(props) => props.theme.colors.text4};
  border-radius: 20px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`

const Primary = ({ icon, text, type }: IButtonProp) => {
  const style = Style[type]
  const color = type === 'filled' ? colors.text4 : colors.action

  return (
    <ButtonStyle
      style={{
        ...style,
        height: '72px',
        padding: '20.5px 50px',
      }}
      type='button'
    >
      <Icon size={20} color={color} icon={icon} />
      <WorkSans.H5>{text}</WorkSans.H5>
    </ButtonStyle>
  )
}

const Secondary = ({ icon, text, type }: IButtonProp) => {
  const style = Style[type]
  const color = type === 'filled' ? colors.text4 : colors.action

  return (
    <ButtonStyle
      style={{
        ...style,
        height: '68px',
        padding: '19px 50px',
      }}
    >
      <Icon size={20} color={color} icon={icon} />
      <WorkSans.Text style={{ fontWeight: '600' }}>{text}</WorkSans.Text>
    </ButtonStyle>
  )
}

const Tertiary = ({ icon, text, type }: IButtonProp) => {
  const style = Style[type]
  const color = type === 'filled' ? colors.text4 : colors.action

  return (
    <ButtonStyle
      style={{
        ...style,
        height: '46px',
        padding: '12px 50px',
      }}
    >
      <Icon size={20} color={color} icon={icon} />
      <WorkSans.Text style={{ fontWeight: '600' }}>{text}</WorkSans.Text>
    </ButtonStyle>
  )
}

export const Button = {
  Primary,
  Secondary,
  Tertiary,
}
