import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  className, label, type, onClick, children, title
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`btn ${className}`} type={type} onClick={onClick} title={title}>
    {label}
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node
}

Button.defaultProps = {
  className: '',
  title: '',
  label: '',
  type: 'button',
  onClick: undefined,
  children: undefined
}

export default Button
