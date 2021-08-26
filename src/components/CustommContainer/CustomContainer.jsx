import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import 'assets/scss/components/custom-container.scss'

const CustomContainer = (props) => {
  const { children, maxWidth, fixed, ...rest } = props
  return (
    <Container {...rest} fixed={fixed} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

CustomContainer.defaultProps = {
  maxWidth: 'xl',
  fixed: true,
}

CustomContainer.propTypes = {
  fixed: PropTypes.bool,
  maxWidth: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default CustomContainer
