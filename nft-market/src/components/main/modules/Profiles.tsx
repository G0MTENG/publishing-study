import { useDeviceSizeContext } from '@/components/atoms'
import { List } from '@/components/modules'

const profiles = [
  'https://s3-alpha-sig.figma.com/img/a39f/da5c/d9cf80d943d7d6785b8f65b3245d3ec2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cctlztq04hzcyQI0Lpi27whow3vm-hEnVaiQLb6eTZMYS2AO1Lg-TcwmIp4xTasH33wL4klssQanXHPXyQsSbTeJ3N25MK2QWUHFU7Q1yqrrU5CXGfC9luqc-LkM-mu4mcRJ14SYAu4RsxftDSECpyT7Z0OXlbfwj7L0fQZYjXCCUC23~GuRb8U4Jzk3wBM0KcVHt6F~fMBzS09PvA-WYzXoJSV5BGwqkvyX-4-ZaCgYXdMUA3bsY3iZCG8lXVQF9yqFFvtSuVyjxS19UenR4zHNkV9STuMvpQRpQm3qLa4CyMr0UtG6PMyHYHTi8Kr7kFxUV0WBQJto4Ks-S0nzOw__',
  'https://s3-alpha-sig.figma.com/img/abe9/f108/c25c3aaa5a96f52b31f03e3bef1cda38?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPdyQnmBukb0yK8GlY0w7Qear~iWM6HLVw9v97tl2w2qzaNc0XWuX2YooraYVboQxy2j7lAbD22MPGs8IBaYrAC~RcrefbDy2ABhVBduzVbcLTriooOQl1rn7R8a0uCw9Lxqj-Mtbtvans1IRxvfnQOcOlCBI7cX~0lTQ3PoG847NWTLVge2u1M6xViCY3z~g3HmZJMLS9ljXL8mhDzKrY1sz1du7b61YM1uEJSAJE5UwgsiMlb8ss60HcaFQTE1YLRGJ6Y2g07IS8UWoJuubkdqY40sPgQ-buwNDFm4bQRirvCXjq0vnwl9zyAagFhRWLHqf9fx1hQSoe2LE4SJYA__',
  'https://s3-alpha-sig.figma.com/img/2a5d/fbb9/5f1992537c3cf16349f4ca29fb937fc6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c9S~a7ZB37FsTnS4JAUy6wy75-YDSD9SUC-0eA0-a0BX5mh7qX7Em7cOJVtLvdnRpXk1jJX7QL9Nj46XfYcJ6ZXqWf-vXfTfReTvd3yfxXixDoeOWQWuDudzsWaBRoJ-FKQX3jYAUUu2uV5~A5rafgs8WycJ8dvaqazI3zjfmyjppLnerogYr1nJBTVzp7L6njQFFef~tQyy4veYFkT8CBTzVnZnrU78VVsjoWZQVRUT0oUKSDuUYCvI9M1OG~7Y9iPhAK~wVrCpkbLw1nBvCakl27GKyjwVdZdss3ArVpgZWbNXV1s~ZXjmVAgBTFFSCP1lHyG3ZUhh0YuH5Rybjg__',
]

export const Profiles = () => {
  const size = useDeviceSizeContext()
  return (
    <List.ListItems
      direction={'row'}
      gap={0}
      style={{
        width: size === 'small' ? '77px' : '100px',
      }}
    >
      {profiles.map((profileUrl, index) => (
        <List.ListProfileItem key={index} url={profileUrl} index={index} />
      ))}
    </List.ListItems>
  )
}
