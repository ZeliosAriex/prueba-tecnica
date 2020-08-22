/* eslint-disable object-curly-newline */
import styled from 'styled-components'

/*
 Nos devuelve correctamente las clases de las columnas respecto a los parámetros
 si alguno de estos es 0 no se omite como nombre de clase
*/
const getSizes = (xs, sm, md, lg, xl) => {
  const sizes = { xs, sm, md, lg, xl }
  const classNames = []

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(sizes)) {
    if (value !== 0) {
      if (key === 'xs') classNames.push(`col-${value}`)
      else classNames.push(`col-${key}-${value}`)
    }
  }
  return classNames.join(' ')
}

const Col = styled.div.attrs(({ xs = 12, sm = 0, md = 0, lg = 0, xl = 0 }) => ({
  className: `${getSizes(xs, sm, md, lg, xl)}`,
}))``

Col.displayName = 'Col'

export default Col
