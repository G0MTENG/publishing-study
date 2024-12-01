import styled from 'styled-components'
import { Icon, IconMap, WorkSans } from '../atoms'

const InputContainer = styled.div<{ isError?: boolean }>`
  width: 100%;
  padding: 12px 20px;
  background-color: ${(props) => props.theme.colors.text4};
  border-radius: 20px;
  border: 1px solid ${(props) => (props.isError ? '#FF0000' : props.theme.colors.text3)};

  display: flex;
  gap: 12px;
  align-items: center;

  input {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: ${(props) => props.theme.colors.text1};
    flex: 1;
  }
`

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon: IconMap
  isError?: boolean
  errorMessage?: string
}

export const Input = ({ icon, isError, errorMessage, ...props }: InputProps) => {
  return (
    <>
      <InputContainer isError={isError}>
        <Icon icon={icon} size={20} color='#BDBDBD' />
        <input {...props} />
      </InputContainer>
      {isError && (
        <WorkSans.Caption
          style={{
            color: '#FF0000',
          }}
        >
          {errorMessage}
        </WorkSans.Caption>
      )}
    </>
  )
}
