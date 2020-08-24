import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

const Input = ({
  name, rules, label, disabled, type, defaultValue
}) => {
  const { register, errors } = useFormContext()

  const getClasses = () => `form-control ${errors[name] && 'is-invalid'}`

  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        className={getClasses()}
        name={name}
        type={type}
        id={name}
        defaultValue={defaultValue}
        ref={register(rules)}
        disabled={disabled}
      />
      {errors[name] && (
        <div className='invalid-feedback d-block'>{errors[name].message}</div>
      )}
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  rules: PropTypes.object,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any
}

Input.defaultProps = {
  rules: {},
  label: '',
  disabled: false,
  type: 'text',
  defaultValue: ''
}

export default Input
