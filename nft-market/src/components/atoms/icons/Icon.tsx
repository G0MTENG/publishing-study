import { IconProps } from './IconProps'

const ActiveBell = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.35419 22C10.0593 22.6224 10.9856 23 12 23C13.0145 23 13.9407 22.6224 14.6458 22M18 9C18 7.4087 17.3679 5.88258 16.2427 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.8826 3.63214 7.75738 4.75736C6.63216 5.88258 6.00002 7.4087 6.00002 9C6.00002 12.0902 5.22049 14.206 4.34968 15.6054C3.61515 16.7859 3.24788 17.3761 3.26134 17.5408C3.27626 17.7231 3.31488 17.7926 3.46179 17.9016C3.59448 18 4.19261 18 5.38887 18H18.6112C19.8074 18 20.4056 18 20.5382 17.9016C20.6852 17.7926 20.7238 17.7231 20.7387 17.5408C20.7522 17.3761 20.3849 16.7859 19.6504 15.6054C18.7795 14.206 18 12.0902 18 9Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='18' cy='4' r='4' fill='#E01E1E' />
    </svg>
  )
}

const Search = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Ethereum = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 11.0001L12 13L20 11M4 11.0001L12 2M4 11.0001L12 9.00008M20 11L12 2M20 11L12 9.00008M12 2V9.00008M5.5 15L12.0001 22L18.5 15L12 16.5L5.5 15Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Diamond = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.49954 9H21.4995M9.99954 3L7.99954 9L11.9995 20.5L15.9995 9L13.9995 3M12.6141 20.2625L21.5727 9.51215C21.7246 9.32995 21.8005 9.23885 21.8295 9.13717C21.8551 9.04751 21.8551 8.95249 21.8295 8.86283C21.8005 8.76114 21.7246 8.67005 21.5727 8.48785L17.2394 3.28785C17.1512 3.18204 17.1072 3.12914 17.0531 3.09111C17.0052 3.05741 16.9518 3.03238 16.8953 3.01717C16.8314 3 16.7626 3 16.6248 3H7.37424C7.2365 3 7.16764 3 7.10382 3.01717C7.04728 3.03238 6.99385 3.05741 6.94596 3.09111C6.89192 3.12914 6.84783 3.18204 6.75966 3.28785L2.42633 8.48785C2.2745 8.67004 2.19858 8.76114 2.16957 8.86283C2.144 8.95249 2.144 9.04751 2.16957 9.13716C2.19858 9.23885 2.2745 9.32995 2.42633 9.51215L11.385 20.2625C11.596 20.5158 11.7015 20.6424 11.8279 20.6886C11.9387 20.7291 12.0603 20.7291 12.1712 20.6886C12.2975 20.6424 12.4031 20.5158 12.6141 20.2625Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Menu = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 12H21M3 6H21M9 18H21'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const HeartDefault = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const HeartLike = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Rocket = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 15L9 12M12 15C13.3968 14.4687 14.7369 13.7987 16 13M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13M9 12H4C4 12 4.55 8.97 6 8C7.62 6.92 11 8 11 8M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const HourGlass = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 12L7.72711 8.43926C7.09226 7.91022 6.77484 7.6457 6.54664 7.32144C6.34444 7.03413 6.19429 6.71354 6.10301 6.37428C6 5.99139 6 5.57819 6 4.7518V2M12 12L16.2729 8.43926C16.9077 7.91022 17.2252 7.6457 17.4534 7.32144C17.6556 7.03413 17.8057 6.71354 17.897 6.37428C18 5.99139 18 5.57819 18 4.7518V2M12 12L7.72711 15.5607C7.09226 16.0898 6.77484 16.3543 6.54664 16.6786C6.34444 16.9659 6.19429 17.2865 6.10301 17.6257C6 18.0086 6 18.4218 6 19.2482V22M12 12L16.2729 15.5607C16.9077 16.0898 17.2252 16.3543 17.4534 16.6786C17.6556 16.9659 17.8057 17.2865 17.897 17.6257C18 18.0086 18 18.4218 18 19.2482V22M4 2H20M4 22H20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const ClockFastForward = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.7 11.5L20.7005 13.5L18.7 11.5M20.9451 13C20.9814 12.6717 21 12.338 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.8273 21 17.35 19.6963 19 17.6573M12 7V12L15 14'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Bell = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const ChevronLeft = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const ChevronRight = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 18L15 12L9 6'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const ChevronDown = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 9L12 15L18 9'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const ArrowNarrowRight = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 12H20M20 12L14 6M20 12L14 18'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const CryptoCurrency = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 2L4 4M22 2L20 4M22 22L20 20M2 22L4 20M2 16H3.5M8 2V3.5M22 8H20.5M16 22V20.5M18 16H21.5M16 2V6M2 8H6M8 22V18M11.4343 7.56569L7.56569 11.4343C7.36768 11.6323 7.26867 11.7313 7.23158 11.8455C7.19895 11.9459 7.19895 12.0541 7.23158 12.1545C7.26867 12.2687 7.36768 12.3677 7.56569 12.5657L11.4343 16.4343C11.6323 16.6323 11.7313 16.7313 11.8455 16.7684C11.9459 16.8011 12.0541 16.8011 12.1545 16.7684C12.2687 16.7313 12.3677 16.6323 12.5657 16.4343L16.4343 12.5657C16.6323 12.3677 16.7313 12.2687 16.7684 12.1545C16.8011 12.0541 16.8011 11.9459 16.7684 11.8455C16.7313 11.7313 16.6323 11.6323 16.4343 11.4343L12.5657 7.56569C12.3677 7.36768 12.2687 7.26867 12.1545 7.23158C12.0541 7.19895 11.9459 7.19895 11.8455 7.23158C11.7313 7.26867 11.6323 7.36768 11.4343 7.56569Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const FilterLines = ({ size = 24, color = '#6F4FF2' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 12H18M3 6H21M9 18H15'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Sales = ({ size = 48 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_49_224)'>
        <path
          d='M44.7837 19.7838L43.2941 21.2376L43.4473 18.6527L36.5953 26.5199L32.7915 24.2148L23.4261 33.4629L19.8037 30.5328L5.63605 45L3 41.4009L19.7998 27.9085L23.4067 30.8526L32.4919 21.5608L36.0814 23.8041L42.5401 17.5007L40.218 17.3316L41.7076 15.8777L45 16.1186L44.7837 19.7838Z'
          fill='#E01E1E'
        />
        <path
          d='M21.3134 24.493C26.435 24.493 30.587 20.3305 30.587 15.1958C30.587 10.0611 26.435 5.89862 21.3134 5.89862C16.1917 5.89862 12.0398 10.0611 12.0398 15.1958C12.0398 20.3305 16.1917 24.493 21.3134 24.493Z'
          fill='#FFD550'
        />
        <path
          d='M30.6036 5.11184C31.0854 4.62875 31.0854 3.8455 30.6036 3.36241C30.1217 2.87931 29.3404 2.87931 28.8586 3.36241C28.3767 3.8455 28.3767 4.62875 28.8586 5.11184C29.3404 5.59493 30.1217 5.59493 30.6036 5.11184Z'
          fill='#FFD550'
        />
        <path
          d='M12.5943 27.3915C13.3927 27.3915 14.0399 26.7426 14.0399 25.9422C14.0399 25.1417 13.3927 24.4929 12.5943 24.4929C11.7959 24.4929 11.1487 25.1417 11.1487 25.9422C11.1487 26.7426 11.7959 27.3915 12.5943 27.3915Z'
          fill='#FFD550'
        />
        <path
          d='M32.5913 29.5032C33.1729 29.5032 33.6444 29.0305 33.6444 28.4473C33.6444 27.8642 33.1729 27.3915 32.5913 27.3915C32.0096 27.3915 31.5381 27.8642 31.5381 28.4473C31.5381 29.0305 32.0096 29.5032 32.5913 29.5032Z'
          fill='#FFD550'
        />
        <path
          d='M21.837 20.5385V22.2055H20.797V20.6C19.3772 20.6 18.2238 20.3798 17.3373 19.9393V18.6026C17.7238 18.8638 18.2523 19.0827 18.9222 19.2594C19.5922 19.4361 20.2171 19.5244 20.797 19.5244V15.5913C19.3305 15.0485 18.3806 14.5479 17.9473 14.0895C17.5138 13.6313 17.2974 13.0897 17.2974 12.4648C17.2974 11.7223 17.6273 11.0809 18.2873 10.5405C18.9472 10.0002 19.7837 9.6763 20.797 9.56879V8.18604H21.837V9.53807C23.1434 9.56879 24.0469 9.71226 24.5468 9.96823V11.2742C23.8669 10.8645 22.9634 10.6442 21.837 10.6135V14.6695C23.2235 15.1765 24.1718 15.6669 24.6818 16.1405C25.1917 16.6143 25.4468 17.1533 25.4468 17.7575C25.4468 18.4848 25.1283 19.0955 24.4919 19.5897C23.8552 20.084 22.9703 20.4002 21.8371 20.5384L21.837 20.5385ZM20.797 14.2394V10.6596C20.2371 10.7468 19.7937 10.9374 19.4671 11.2319C19.1404 11.5264 18.9771 11.8837 18.9771 12.3035C18.9771 12.744 19.1104 13.105 19.3771 13.3867C19.6436 13.6683 20.117 13.9525 20.7969 14.2394H20.797ZM21.837 15.9908V19.4631C23.1235 19.2479 23.7669 18.7154 23.7669 17.8653C23.7669 17.1586 23.1235 16.5339 21.837 15.991V15.9908Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_49_224'>
          <rect width='42' height='42' fill='white' transform='translate(3 3)' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Icon = {
  ActiveBell,
  Search,
  Ethereum,
  Diamond,
  Menu,
  HeartDefault,
  HeartLike,
  Rocket,
  HourGlass,
  ClockFastForward,
  Bell,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowNarrowRight,
  CryptoCurrency,
  FilterLines,
  Sales,
}
