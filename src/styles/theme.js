import { lighten, shade } from 'polished'

const theme = {
  primary: '#343a40',

  infoColor: '#3090ef',
  infoColorDark: '#1f64a9',

  notFoundBtnColor: '#ff6643'
}

// Special
theme.primaryLight = lighten(0.1, theme.primary)
theme.notFoundBtnColorHover = shade(0.1, theme.notFoundBtnColor)

export default theme
