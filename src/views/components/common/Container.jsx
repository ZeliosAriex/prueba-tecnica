import styled from 'styled-components'

const getFluidClass = (isFluid) => (isFluid ? 'container-fluid' : 'container')

const Container = styled.div.attrs(({ fluid = false }) => ({
  className: `${getFluidClass(fluid)}`,
}))``

export default Container
