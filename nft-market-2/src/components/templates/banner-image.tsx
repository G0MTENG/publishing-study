import styled from 'styled-components'

const Image = styled.img<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.text1};
  object-fit: cover;
  display: block;
`

const imageUrl =
  'https://s3-alpha-sig.figma.com/img/85c0/8b92/890ad3bb78d42a6892b85871b782b103?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWsLFrS61JXgPW8ZA14dRZwmEOWIW898c~kTK5cb5nyu7q48YViAln3mDw~NdrcleosQUJeFKst6Oifga7ZEo~Rg~xkoSnfZKOZoZdTcmmMhQ2OGi6ICIDLZHa3aEu5PtTIvRRHKlFXWaHpo4hzTc8xGrxL3YQWG7HX4pOXn9PH70J3qoGpoB9f~OjDGgzobDeR4I2VdrUmLh2vblEEIVnJZ0ps2V2UD1SIMStyOGX7FXO6EIijMPYpAFxVIH-Bir5kwCybvEij2kYvKbRbBJCRhkVxBxNvCDB4srmN6L7I-Rdb9tVlsVgTqelByZASBv6WQXLb7t5RsJPM4ZIOPvw__'

const Desktop = () => {
  return <Image src={imageUrl} height='560px' />
}

const Tablet = () => {
  return <Image src={imageUrl} height='420px' />
}

const Mobile = () => {
  return <Image src={imageUrl} height='320px' />
}

export const BannerImage = {
  Desktop,
  Tablet,
  Mobile,
}
