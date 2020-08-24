import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  className, label, type, onClick
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`btn ${className}`} type={type} onClick={onClick}>
    {label}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  label: '',
  type: 'button',
  onClick: undefined
}

export default Button
