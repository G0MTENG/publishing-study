import { colors } from '@/themes/colors'
import { FlexBetween, FlexColumn, ImagePlaceholder, PaddingContainer, WorkSans } from '../atoms'
import { Button } from '../modules'
import { Input } from '../modules/input'

const Desktop = () => {
  return (
    <FlexBetween
      style={{
        width: '100%',
        gap: 60,
        backgroundColor: colors.text1,
      }}
    >
      <ImagePlaceholder height='615px' />
      <PaddingContainer padding='100px 0'>
        <FlexColumn gap={40}>
          <FlexColumn
            style={{
              width: '460px',
            }}
            gap={20}
          >
            <WorkSans.H2>Create account</WorkSans.H2>
            <WorkSans.Text
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              {'Welcome! enter your details and start\ncreating, collecting and selling NFTs.'}
            </WorkSans.Text>
          </FlexColumn>
          <FlexColumn
            gap={30}
            style={{
              width: '330px',
            }}
          >
            <FlexColumn gap={15}>
              <Input icon='User' placeholder='Username' />
              <Input icon='EnvelopSimple' placeholder='Email Address' />
              <Input icon='LockKey' placeholder='Password' />
              <Input icon='LockKey' placeholder='Confirm Password' />
            </FlexColumn>
            <Button.Tertiary text='Create account' type='filled' />
          </FlexColumn>
        </FlexColumn>
      </PaddingContainer>
    </FlexBetween>
  )
}

const Tablet = () => {
  return (
    <FlexBetween
      style={{
        width: '100%',
        gap: 40,
        backgroundColor: colors.text1,
      }}
    >
      <ImagePlaceholder height='615px' />
      <PaddingContainer padding='80px 0'>
        <FlexColumn gap={40}>
          <FlexColumn
            style={{
              width: '325px',
            }}
            gap={20}
          >
            <WorkSans.H3>Create account</WorkSans.H3>
            <WorkSans.Text
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              {'Welcome! enter your details and start\ncreating, collecting and selling NFTs.'}
            </WorkSans.Text>
          </FlexColumn>
          <FlexColumn
            gap={30}
            style={{
              width: '325px',
            }}
          >
            <FlexColumn gap={15}>
              <Input icon='User' placeholder='Username' />
              <Input icon='EnvelopSimple' placeholder='Email Address' />
              <Input icon='LockKey' placeholder='Password' />
              <Input icon='LockKey' placeholder='Confirm Password' />
            </FlexColumn>
            <Button.Tertiary text='Create account' type='filled' />
          </FlexColumn>
        </FlexColumn>
      </PaddingContainer>
    </FlexBetween>
  )
}

const Mobile = () => {
  return (
    <>
      <ImagePlaceholder height='232px' />
      <PaddingContainer padding='30px 30px 40px'>
        <FlexColumn gap={30}>
          <FlexColumn gap={20}>
            <WorkSans.H3>Create account</WorkSans.H3>
            <WorkSans.Text
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              {'Welcome! enter your details and start\ncreating, collecting and selling NFTs.'}
            </WorkSans.Text>
          </FlexColumn>
          <FlexColumn gap={30}>
            <FlexColumn gap={15}>
              <Input icon='User' placeholder='Username' />
              <Input icon='EnvelopSimple' placeholder='Email Address' />
              <Input icon='LockKey' placeholder='Password' />
              <Input icon='LockKey' placeholder='Confirm Password' />
            </FlexColumn>
            <Button.Tertiary text='Create account' type='filled' />
          </FlexColumn>
        </FlexColumn>
      </PaddingContainer>
    </>
  )
}

export const Account = {
  Desktop,
  Tablet,
  Mobile,
}
