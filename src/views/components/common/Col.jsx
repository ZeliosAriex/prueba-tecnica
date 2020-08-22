import styled from 'styled-components'

/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

/*
 Nos devuelve correctamente las clases de las columnas respecto a los parámetros
 si alguno de estos es 0 no se omite como nombre de clase
*/
const getSizes = (xs, sm, md, lg, xl) => {
  const sizes = [xs, sm, md, lg, xl]
  const sizesNames = ['xs', 'sm', 'md', 'lg', 'xl']
  const classNames = []

  Object.keys(sizes).forEach((sizeKeys) =>
    sizes[sizeKeys] !== 0
      ? sizesNames[sizeKeys] === 'xs'
        ? classNames.push(`col-${sizes[sizeKeys]}`)
        : classNames.push(`col-${sizesNames[sizeKeys]}-${sizes[sizeKeys]}`)
      : null
  )

  return classNames.join(' ')
}

const Col = styled.div.attrs(({ xs = 12, sm = 0, md = 0, lg = 0, xl = 0 }) => ({
  className: `${getSizes(xs, sm, md, lg, xl)}`,
}))``

export default Col
