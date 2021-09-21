import React from 'react'
import PropTypes from 'prop-types'

import Slider from '@material-ui/core/Slider'

const CustomSlider = (props) => {
  const { value, ariaLabelledby, className, ...rest } = props

  const [data, setData] = React.useState(value)

  const handleChange = (event, newValue) => {
    setData(newValue)
  }

  return (
    <Slider
      value={data}
      onChange={handleChange}
      aria-labelledby={ariaLabelledby}
      className={className}
      {...rest}
    />
  )
}

CustomSlider.defaultProps = {
  ariaLabelledby: 'continuous-slider',
}

CustomSlider.propTypes = {
  value: PropTypes.number.isRequired,
  ariaLabelledby: PropTypes.string,
  className: PropTypes.string,
}

export default CustomSlider
