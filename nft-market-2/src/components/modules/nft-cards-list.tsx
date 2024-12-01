import { NFTCard } from '../modules'

const image =
  'https://s3-alpha-sig.figma.com/img/7e55/1754/df2c85a307298720a7483609e93b5fef?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AOyqRQ3m8qzQDoFIKQMvM8MLNcMMzUe6oibNqN6iKwAKTC5ZSF679b8atjiz76pHKiiNL0S~V17IdDcQsf4897p9giyIZA31gXvcT0OsBhFBv35EJj3Xd0rAF8Sty1qqUJTTzAkmvvojpYybiquZgMqOTJYw5cvrHlSLVML0kKOX4FflhB~4ChfJQxETJbCEcP9f3e7vaKDtMoZuIFOmVarTBpoRPHG3KRX-AnOR0vGbqRryufX6~dfEkuu56MQDbFiv1u2hoKfXZ8JgJtH75JmXz0UyHuH1eINwZ~UbdZgaBAPb8BTjLuoJPsOFE69FwpbBmVpU0JKdIGtktry5Bw__'

export const NFTCardsList = () => {
  return Array(10)
    .fill(0)
    .map((_, index) => (
      <NFTCard
        key={index}
        item={{
          imageUrl: image,
          title: 'Happy Robot 032',
          profileImageUrl: image,
          profile: 'BeKind2Robots',
          price: 1.63,
          highest: 0.33,
        }}
      />
    ))
}
