import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const CustomButton = (props) => {
  const { variant, color, size, children, ...rest } = props

  return (
    <Button {...rest} variant={variant} color={color} size={size}>
      {children}
    </Button>
  )
}

CustomButton.defaultProps = {
  variant: 'default',
  color: 'primary',
  size: 'medium',
  children: 'Button',
}

CustomButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default CustomButton
