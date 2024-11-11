import { css, type CSSObject, type Interpolation } from 'styled-components'

export type Breakpoints = 'small' | 'medium' | 'large'

export const BREAKPONT: Record<Breakpoints, number> = {
  small: 639,
  medium: 1422,
  large: 1423,
}

export const breakpoints: Record<Breakpoints, string> = {
  small: '@media (max-width: 639px)',
  medium: '@media (max-width: 1422px)',
  large: '@media (min-width: 1423px)',
}

export const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  }
}, {}) as Record<Breakpoints, any>
