import styled from 'styled-components'

export const ImagePlaceholder = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  background-size: cover;
  background-position: center;
  background-image: url('https://s3-alpha-sig.figma.com/img/0b34/7e10/5d353eae4c7b063b0da73eddb78c3a89?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AniG-3simIEYRQjeY6qrzJoBpKp-Rp7hD6WjrMXP3GFawBrqwvbNVq0R~4ebQUkWLWIKlIR4aS--gJCgFRrxthkEZNoAPPnaRc7sonWUq~RLwDpBhxkKddcXBuovrKu5mWjPPYxq-dToxYg2buHlVg2eTfKAm~mydomm14KL75Ra-zjvWlqvtApCeEp9pGOKKag29xXsUDnuZSPD6RaGn7A3SDk7TbC140TEz1YEITkoueeewHQqc5SMi9V3p2yTPW0ZwWda4LtZ3aK5esjAjnQhnr69Fe4UDvtk2JEApsb1jQymRU4hRcmTw3uVDmmpXiZqaUWy2sObh5XzDK8u1Q__');
`
