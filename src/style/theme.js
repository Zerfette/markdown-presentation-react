import { createMuiTheme } from '@material-ui/core/styles'

export const primary = '#000000'
export const secondary = '#ff0000'

const palette = {
  primary: { main: primary },
  secondary: { main: secondary }
  // type: 'dark'
}
const typography = {
  fontFamily: [
    'Comfortaa',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue'
  ]
}
const overrides = {
  MuiTouchRipple: {
    root: {
      color: palette.primary.main
    }
  }
}
const themeObj = {
  themeName: 'your theme name',
  palette,
  typography,
  overrides
}

export default createMuiTheme(themeObj)
