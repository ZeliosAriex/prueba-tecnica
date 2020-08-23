import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-variant-caps: all-small-caps;
  user-select: none;
`

const Title = ({ h, className, children }) => {
  const HTag = `h${h}`
  if (className !== '') {
    return (
      <StyledTitle as={HTag} className={className}>
        {children}
      </StyledTitle>
    )
  }
  return <StyledTitle as={HTag}>{children}</StyledTitle>
}

Title.defaultProps = {
  h: 1,
  className: '',
}

Title.propTypes = {
  h: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Title
