import { lighten } from 'polished'

const theme = {
  primary: '#343a40',

  infoColor: '#3090ef',
  infoColorDark: '#1f64a9',
}

// Special
theme.primaryLight = lighten(0.1, theme.primary)

export default theme
