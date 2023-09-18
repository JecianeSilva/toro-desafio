import { DefaultTheme } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    neutralLightest: "#FFFFFF",
    neutralLight: "#FFFFFE",
    grayIce: "#F6F8FB",
    grayLight: "#EAE9F0",
    neutralMedium: "#5B6067",
    neutralDark: "#464A50",
    neutralDarkest: "#222222",
    primary: "#6131B4",
    primaryDark: "#330066",
    primaryDarkest: "#1F073B"
  },
};

export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1550px",
}

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
}