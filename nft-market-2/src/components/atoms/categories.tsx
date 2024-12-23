import type { IconProps } from '@/types'

const PointBrush = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.8125 84.375H35.9375C39.9549 84.375 43.8821 83.1837 47.2225 80.9517C50.5629 78.7198 53.1664 75.5474 54.7038 71.8358C56.2412 68.1241 56.6435 64.04 55.8597 60.0997C55.0759 56.1595 53.1414 52.5402 50.3006 49.6994C47.4598 46.8586 43.8405 44.9241 39.9003 44.1403C35.96 43.3565 31.8759 43.7588 28.1642 45.2962C24.4526 46.8336 21.2802 49.4371 19.0483 52.7775C16.8163 56.1179 15.625 60.0451 15.625 64.0625C15.625 78.125 7.8125 84.375 7.8125 84.375Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M43.9062 45.3906C51.4063 35.2734 70.4688 12.1094 87.8906 12.1094C87.8906 29.5312 64.7266 48.5938 54.6094 56.0938'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M51.9531 35.3916C57.246 38.3787 61.6223 42.755 64.6094 48.0479'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const MusicNotes = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M70.3125 78.125C76.3531 78.125 81.25 73.2281 81.25 67.1875C81.25 61.1469 76.3531 56.25 70.3125 56.25C64.2719 56.25 59.375 61.1469 59.375 67.1875C59.375 73.2281 64.2719 78.125 70.3125 78.125Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.3125 90.625C26.3531 90.625 31.25 85.7281 31.25 79.6875C31.25 73.6469 26.3531 68.75 20.3125 68.75C14.2719 68.75 9.375 73.6469 9.375 79.6875C9.375 85.7281 14.2719 90.625 20.3125 90.625Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M81.25 31.25L31.25 43.75'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M31.25 79.6875V25L81.25 12.5V67.1875'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Camera = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M81.25 81.25H18.75C17.0924 81.25 15.5027 80.5915 14.3306 79.4194C13.1585 78.2473 12.5 76.6576 12.5 75V31.25C12.5 29.5924 13.1585 28.0027 14.3306 26.8306C15.5027 25.6585 17.0924 25 18.75 25H31.25L37.5 15.625H62.5L68.75 25H81.25C82.9076 25 84.4973 25.6585 85.6694 26.8306C86.8415 28.0027 87.5 29.5924 87.5 31.25V75C87.5 76.6576 86.8415 78.2473 85.6694 79.4194C84.4973 80.5915 82.9076 81.25 81.25 81.25Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M50 65.625C57.7665 65.625 64.0625 59.329 64.0625 51.5625C64.0625 43.796 57.7665 37.5 50 37.5C42.2335 37.5 35.9375 43.796 35.9375 51.5625C35.9375 59.329 42.2335 65.625 50 65.625Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const VideoCamera = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.375 23.4375H59.375C62.6902 23.4375 65.8696 24.7545 68.2138 27.0987C70.558 29.4429 71.875 32.6223 71.875 35.9375V73.4375C71.875 74.2663 71.5458 75.0612 70.9597 75.6472C70.3737 76.2333 69.5788 76.5625 68.75 76.5625H18.75C15.4348 76.5625 12.2554 75.2455 9.91117 72.9013C7.56696 70.5571 6.25 67.3777 6.25 64.0625V26.5625C6.25 25.7337 6.57924 24.9388 7.16529 24.3528C7.75134 23.7667 8.5462 23.4375 9.375 23.4375V23.4375Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M71.875 43.75L93.75 31.25V68.75L71.875 56.25'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Basketball = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M50 87.5C70.7107 87.5 87.5 70.7107 87.5 50C87.5 29.2893 70.7107 12.5 50 12.5C29.2893 12.5 12.5 29.2893 12.5 50C12.5 70.7107 29.2893 87.5 50 87.5Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23.4375 23.5166C30.449 30.5464 34.383 40.0722 34.375 50.001C34.383 59.9297 30.449 69.4555 23.4375 76.4854'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M76.5642 23.5166C69.5608 30.5516 65.6289 40.0742 65.6289 50.001C65.6289 59.9277 69.5608 69.4503 76.5642 76.4854'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 50H87.5'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M50 12.5V87.5'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Planet = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M50 84.375C68.9848 84.375 84.375 68.9848 84.375 50C84.375 31.0152 68.9848 15.625 50 15.625C31.0152 15.625 15.625 31.0152 15.625 50C15.625 68.9848 31.0152 84.375 50 84.375Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M71.9529 23.5557C82.7732 20.5869 90.8982 20.8604 93.3201 25.001C97.617 32.4619 81.7186 49.7276 57.8123 63.5166C33.9061 77.3057 11.0154 82.4619 6.6795 75.001C4.29669 70.8604 8.12481 63.6729 16.0936 55.7823'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
const BookmarksSimple = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M65.625 87.5L43.75 71.875L21.875 87.5V28.125C21.875 27.2962 22.2042 26.5013 22.7903 25.9153C23.3763 25.3292 24.1712 25 25 25H62.5C63.3288 25 64.1237 25.3292 64.7097 25.9153C65.2958 26.5013 65.625 27.2962 65.625 28.125V87.5Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M34.375 12.5H75C75.8288 12.5 76.6237 12.8292 77.2097 13.4153C77.7958 14.0013 78.125 14.7962 78.125 15.625V75'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
const Swaches = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.3355 67.5774L23.7887 14.0227C23.8547 13.6185 24.0006 13.2315 24.2178 12.8843C24.4349 12.537 24.719 12.2365 25.0535 12.0002C25.388 11.7638 25.7662 11.5964 26.166 11.5078C26.5659 11.4191 26.9794 11.4109 27.3824 11.4837L48.9449 15.2727C49.7596 15.425 50.482 15.891 50.9568 16.5703C51.4316 17.2496 51.6209 18.0881 51.484 18.9055L41.9918 72.7727C41.3417 76.3999 39.2977 79.6285 36.2972 81.7676C33.2966 83.9066 29.578 84.7862 25.9371 84.218C18.1637 82.968 12.9684 75.3508 14.3355 67.5774Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M46.209 48.7501L74.6855 38.3985C75.0727 38.2556 75.4843 38.1907 75.8967 38.2077C76.309 38.2247 76.7139 38.3232 77.088 38.4976C77.4621 38.6719 77.7979 38.9186 78.0761 39.2234C78.3544 39.5282 78.5695 39.8851 78.709 40.2735L86.209 60.8204C86.4856 61.5976 86.4437 62.4526 86.0925 63.199C85.7412 63.9454 85.1091 64.5226 84.334 64.8048L32.9277 83.5157'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M85.9375 63.4766V81.25C85.9375 82.0788 85.6083 82.8737 85.0222 83.4597C84.4362 84.0458 83.6413 84.375 82.8125 84.375H28.125'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28.125 75C30.7138 75 32.8125 72.9013 32.8125 70.3125C32.8125 67.7237 30.7138 65.625 28.125 65.625C25.5362 65.625 23.4375 67.7237 23.4375 70.3125C23.4375 72.9013 25.5362 75 28.125 75Z'
        fill='white'
      />
    </svg>
  )
}

export const Categories = {
  PointBrush,
  MusicNotes,
  Camera,
  VideoCamera,
  Basketball,
  Planet,
  BookmarksSimple,
  Swaches,
}
