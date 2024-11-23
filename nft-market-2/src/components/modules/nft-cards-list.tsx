import { NFTCard } from '../modules'
import { avatars } from '../atoms'

const images = [
  'https://s3-alpha-sig.figma.com/img/17c7/4acd/5b5ba867000004883ee7944815a839d4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAY7tNKAC9r9LKzbdGTn5amNPhCn1i-iHBdc0eIrRG8KTUbYzk2VqbEKjinMrAbSyrebxSbiipGGrRqMbXULeZpnU2GhmStbK5Ep8SixOBhZlC3WJ347xPskSUtGV2LbShRYPdZ3mA71wckqpfPVMm-TTZrpCyMP4gG8sIyIykZuVBjM3vR~nKMfb~OiOZFP7C8EbLuL4rfu~D33LD5n4CUUrpWSS8FX9bz7vnWkqR8019whdxjIZxUuJkdHfNzpDEF0Tb~YR3THdu9aglbVVDswfJIw4DqNTThXKHJLH2RCGN8adB2SgkboHhekF523VHlhgf1Kt1mlsGv2sQFxGQ__',
  'https://s3-alpha-sig.figma.com/img/5abc/712e/766f194b46ede2b0f9edcb91b3031413?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhXRo3XHrEgXCZkWOEsLmqZMqv9f1HmDNvTAHByLCi5TVF89PKJE63MtcGRoV~W02GzWIfJEumK20t8dQdneEY0vjrpPjh0Ry1fbEesmiexSS8Jk-ZvLs6kMuMZCGUsH2qJkcmrGIrXOFc~kUlqs-PA51ZXLX0hDPGVQL7IggU0lUPnOFNBhvFTqtozPEF5a5R1T27sgO9NpT1~rALnRw1IS4Qmdh5MEtVPXRE3vIpV3Mu9WQMPMgynYOn4N9pvdP2gL680qniH2EWxienrDTvQiJ8BgddzNZ3mhEjwCEJ4Y4krMji~EXzm1u6t0ikGQLS94vhclrW5xQD46a8uJRw__',
  'https://s3-alpha-sig.figma.com/img/959b/c7d4/5f17e9b726f61f6cfc0519d7f88e673c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5EXOiVxJdSVX9aEgAI4kDuUhiX0HgitPnwH0P0LjlmqBJXAF5bGNku6eA6yBQ16mLEez0jJtZwbcSnzX13KOoil8DD1cLb-ZEbgBr5LU2hxFJQ1gcbA0Z6JfxwN6buJSB0bLiHLn~B-y9RNly8Te8HSscOi-BcMtdu7FWeWPYcTzF8xpV1OdJO9bNk-YJKTDtg3RjNPlGUEs1j1wK2mS5z2oG~ou-kZVM7P~F9wDzLH16kYUkP2f98DRgoW4Abjl-L~fHoMkQnvOOkSX4pca6NhqBkKATnITy3rMvq~aXbCTJUvnZOlfyXaX8XrFakd9SmKcMPH0NxUJxFaj6crbQ__',
  'https://s3-alpha-sig.figma.com/img/121c/dda3/402804d9f103b0d623fd05724eb36ad4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nGShALfNDDBUZ~S4AL9bKlFQR9EoWUmLzCBKATxqPy0gxPhTqxVgeRVsF7SVdh9AO422teMXcKFADMMetSY2xBjjsYIQM-h24Yi6aIMk0aP-VgQATfkw5FoualTFFZzFl5WC~nbxxt74m-Zm6Z4UWmZre2PTJ6K9~5hj-R-PwGmh6MzW-3BfVN6kmTCoRt39N~keYNqXMHYWkRLwfoCrbYwQp993lIoganltIcoHfmczA620evhU1n57dVPBM37yrAb2~I9XGyZc5bsgV2P8Nn2qdGhActXqWQWjhwiLwrhw8BAXw6VUKhdwERXcq12cP2VDGwjySwBTA374W7EHRg__',
  'https://s3-alpha-sig.figma.com/img/d708/098d/95de438163a608988f293d376aed4b32?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9I3eZ~XRmgBblIfrvxjLvVGtIr66LPiLrQN4ohrJyVzNcrF1NK6-0He9uGqf3waumbzGrGY9fkZMecxSSphzJb7L7yV0ovlAhWl7aHBVlTqojXE4vdGqGdkGKQtU8rN8e2GwiKB2FkQtipJowFHto0qnODQNdMfCabuKTj8le3IeTdRoOm5pOEeINSAYa1kyjwmft2wHMqnSGVetzU~Xmr5krhSBtgyNd~K8QkCaaoCoGuDMhQyfFu1lIdChDdL6DLEiMw080qguObKBJByLq9sf6Qn0-w1wnoWvgesQoLYYsLuNb-4JLRrbZLWHpAvaI~IUclSSb1bmqEphwJYug__',
  'https://s3-alpha-sig.figma.com/img/860e/12a6/f05337d9fd7c4b9443e910339f5ee0df?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GHuPFYyaQoKIsQFtf8s4x~0daZnL~3lHE32bKdnwyjClaaoVHGYX8OkrCiTe07pjImDB9FhOyEwkcFAuUgs08bKeAufnQBHuDpInGAiVajFY4EbIbLE6gGgj3pCHjHh43L~5vk3CSdA0Mdo0Y9Lp3zPohG3sOO~Aqju2z5dlUwFCFhkGvVpBxczRJ-ngJGT7ndcD72~roDriwu2OsPX8Q8BCwDghOEnzrsYY0A1R0vmA1n0CagYgxF3qJEBdwJo1OZRbF5cI0DXHJXB3VDCXrPOZkxb9ag3ayzibvHw2iX-t-9r-jRzMGyiuTX4hQXuUGX5ZU1FSpON5SJCITM0AEA__',
  'https://s3-alpha-sig.figma.com/img/7fd9/49cb/ad8f0cc76ced9954479f4bd6131e073b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5B3ZgWpxZO3vXzQbch7Ky-3tIUD3zvFLG-736KQ7g7QsyNDPZvOxpFaklOvcYUA7T~~6tLNI0trYgMVPg36cujpoaM1fQfjbdmVAV4l6vu908EqpdNZxsPO1Y1sZPikW1zPqCnUP26uPNfd-uUsXW-i75YCnfxjsKDBk-BsXp2WZJyKY2sSBFlbX4FwuKawNKHHYF3i3RfwXZlBtx5AkIApqDaN8EctpgAJ8z6AyA5zi9IGTzp6Hk0--r8SV1rksji9K1sIQ1IBr4CO5Erv7TMW4rMI8kzTh7UiXfZY~tmD3VeT2krMXh4ODLTF09ODRtnP46cW~OxoXJaYqHz7kQ__',
  'https://s3-alpha-sig.figma.com/img/67e1/f6fe/e50c7ead5b8ab11fc9ca9b560fadd34e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKLCUfXUqowD7OMMPj1q0cEzp71FtIbzIN4doZbg5Y-8FI~Nyzo2uTrwC4rBUqYkBq5lhYv3WlN4l49o0ZUiMfOQ~OhITvGwv3Ygo88onicrH0eFLA7lV-wSOo1GXx2ZkREtjF1~o1L3XZ7QtCDMwP-KUy4rRVICRMXeOlFLvHYbVOnR1redTBzpWpdXJFlvSsByCYEZZ4xixnoDWBE~djKOtzDyxckqP8J2TfWSIXRjnuTm97TpU5YUeUSiJamx6bABh-zAeSwvyQqBsFCVuxviGRQO~MtCKTiPBnNWxMR-lcZ7RtAhG44qrcelKnImYvaLKgZxURjiEk-WiIR1qg__',
]

export const NFTCardsList = () => {
  return Array(10)
    .fill(0)
    .map((_, index) => (
      <NFTCard
        key={index}
        item={{
          imageUrl: images[0],
          title: 'Happy Robot 032',
          profileImageUrl: avatars[0],
          profile: 'BeKind2Robots',
          price: 1.63,
          highest: 0.33,
        }}
      />
    ))
}
