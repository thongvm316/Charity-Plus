import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

import 'assets/scss/components/typography.scss'

const CustomTypography = (props) => {
  const { children, ...rest } = props

  return <Typography {...rest}>{children}</Typography>
}

CustomTypography.propTypes = {
  children: PropTypes.any.isRequired,
}

export default CustomTypography
