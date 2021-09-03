import React from 'react'
import PropTypes from 'prop-types'

import 'assets/scss/components/image.scss'

const Image = (props) => {
  const { src, alt, ...rest } = props
  return (
    <div {...rest}>
      <img className='image-common-style' src={src} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
