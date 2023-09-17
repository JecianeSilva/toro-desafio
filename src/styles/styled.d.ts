import 'styled-components'
declare module 'styled-components' {

  export interface DefaultTheme {
    colors: {
      white: string,
      neutralLightest: string,
      neutralLight: string,
      grayIce: string,
      grayLight: string,
      neutralMedium: string,
      neutralDark: string,
      neutralDarkest: string,
      primary: string,
      primaryDark: string,
      primaryDarkest: string
    }
  }
}