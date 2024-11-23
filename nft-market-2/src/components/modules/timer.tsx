import styled from 'styled-components'
import { FlexBetween, FlexColumn, SpaceMono } from '../atoms'
import { Button } from './icon-button'

const TimerContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors.text2};
  padding: 30px;
  border-radius: 20px;
`

export const Timer = ({ width }: { width: string }) => {
  return (
    <TimerContainer width={width}>
      <SpaceMono.Caption>Auction ends in:</SpaceMono.Caption>
      <FlexBetween style={{ alignItems: 'start', margin: '10px 0 30px' }}>
        <FlexColumn gap={5}>
          <SpaceMono.H3>59</SpaceMono.H3>
          <SpaceMono.Caption>Hours</SpaceMono.Caption>
        </FlexColumn>
        <SpaceMono.H4>:</SpaceMono.H4>
        <FlexColumn gap={5}>
          <SpaceMono.H3>59</SpaceMono.H3>
          <SpaceMono.Caption>Minutes</SpaceMono.Caption>
        </FlexColumn>
        <SpaceMono.H4>:</SpaceMono.H4>
        <FlexColumn gap={5}>
          <SpaceMono.H3>59</SpaceMono.H3>
          <SpaceMono.Caption>Seconds</SpaceMono.Caption>
        </FlexColumn>
      </FlexBetween>
      <Button.Secondary full text='Place Bid' type='filled' />
    </TimerContainer>
  )
}
