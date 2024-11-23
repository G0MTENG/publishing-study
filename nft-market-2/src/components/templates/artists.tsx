import { FlexBetween, FlexColumn, Grid, PaddingContainer, WorkSans } from '../atoms'
import { Button, NFTCardsList } from '../modules'

const Desktop = () => {
  return (
    <PaddingContainer padding='80px 115px'>
      <FlexBetween style={{ marginBottom: '60px' }}>
        <WorkSans.H3>More From This Artist</WorkSans.H3>
        <Button.Secondary icon='ArrowRight' text='Go To Artist Page' type='outlined' />
      </FlexBetween>
      <Grid row={3} gap={{ col: '60px' }}>
        <NFTCardsList />
      </Grid>
    </PaddingContainer>
  )
}

const Tablet = () => {
  return (
    <PaddingContainer padding='40px 72px'>
      <FlexBetween style={{ marginBottom: '60px' }}>
        <WorkSans.H4>More From This Artist</WorkSans.H4>
        <Button.Secondary icon='ArrowRight' text='Go To Artist Page' type='outlined' />
      </FlexBetween>
      <Grid row={2} gap={{ col: '60px' }}>
        <NFTCardsList />
      </Grid>
    </PaddingContainer>
  )
}

const Mobile = () => {
  return (
    <PaddingContainer padding='40px 30px'>
      <FlexColumn gap={30}>
        <WorkSans.H4 style={{ textAlign: 'center' }}>More From This Artist</WorkSans.H4>
        <Grid row={1}>
          <NFTCardsList />
        </Grid>
        <Button.Secondary icon='ArrowRight' text='Go To Artist Page' type='outlined' />
      </FlexColumn>
    </PaddingContainer>
  )
}

export const Artists = {
  Desktop,
  Tablet,
  Mobile,
}
