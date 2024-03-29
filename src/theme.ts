export interface Theme {
  primary: string
  secondary: string
  fontPrimary: string
  fontSecondary: string
  hover: string
  active: string
  disabled: string
}

const lightTheme: Theme = {
  primary: '#EDEFEE',
  secondary: '#ccc1c0',
  fontPrimary: '#41403C',
  fontSecondary: '#262423',
  hover: '#D08856',
  active: '#AA210F',
  disabled: '#999999',
}

const darkTheme: Theme = {
  primary: '#41403C',
  secondary: '#66635d',
  fontPrimary: '#EDEFEE',
  fontSecondary: '#EDEFEE',
  hover: '#D08856',
  active: '#AA210F',
  disabled: '#999999',
}

const theme = {
  light: lightTheme,
  dark: darkTheme,
}

export default theme
