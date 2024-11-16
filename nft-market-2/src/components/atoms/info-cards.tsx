import type { IconProps } from '@/types'

const Card = ({ size = 230 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 230 230'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M115 230C178.513 230 230 178.513 230 115C230 51.4873 178.513 0 115 0C51.4872 0 0 51.4873 0 115C0 178.513 51.4872 230 115 230Z'
        fill='url(#paint0_linear_1617_11614)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1617_11614'
          x1='32.0834'
          y1='-2.06904e-06'
          x2='207.623'
          y2='36.541'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#A259FF' />
          <stop offset='1' stop-color='#3B3B3B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

const Media = ({ size = 230 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 230 230'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M115 230C178.513 230 230 178.513 230 115C230 51.4873 178.513 0 115 0C51.4872 0 0 51.4873 0 115C0 178.513 51.4872 230 115 230Z'
        fill='url(#paint0_linear_1617_11590)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1617_11590'
          x1='32.0834'
          y1='-2.06904e-06'
          x2='207.623'
          y2='36.541'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#A259FF' />
          <stop offset='1' stop-color='#3B3B3B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

const Shopping = ({ size = 230 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 230 230'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M115 230C178.513 230 230 178.513 230 115C230 51.4873 178.513 0 115 0C51.4872 0 0 51.4873 0 115C0 178.513 51.4872 230 115 230Z'
        fill='url(#paint0_linear_1617_11659)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1617_11659'
          x1='32.0834'
          y1='2.52375e-05'
          x2='207.623'
          y2='36.541'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#A259FF' />
          <stop offset='1' stop-color='#3B3B3B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const InfoCardIcons = {
  Card,
  Media,
  Shopping,
}
