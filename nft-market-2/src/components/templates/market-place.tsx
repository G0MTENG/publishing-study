import { NFTCardsList } from '../modules'
import { Grid, PaddingContainer } from '../atoms'

const Desktop = () => {
  return (
    <PaddingContainer padding='60px 115px'>
      <Grid row={3}>
        <NFTCardsList />
      </Grid>
    </PaddingContainer>
  )
}

const Tablet = () => {
  return (
    <PaddingContainer padding='60px 115px'>
      <Grid row={2}>
        <NFTCardsList />
      </Grid>
    </PaddingContainer>
  )
}

const Mobile = () => {
  return (
    <PaddingContainer padding='40px 30px'>
      <Grid row={1}>
        <NFTCardsList />
      </Grid>
    </PaddingContainer>
  )
}

export const MarketPlace = {
  Desktop,
  Tablet,
  Mobile,
}
