import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from 'components/CustomButton/CustomButton'
import Typography from '@material-ui/core/Typography'

const CustomCard = (props) => {
  const { header, image, content, ...rest } = props

  return (
    <Card {...rest}>
      <CardHeader className='home__cause-list-card-header' title={header} />

      <CardMedia className='home__cause-list-card-media' image={image} />

      <CardContent className='home__cause-list-card-content'>
        <Box className='home__cause-list-price'>
          <Box className='home__cause-list-raised'>
            <Typography component='h6'>RAISED</Typography>
            <Typography component='p'>$800</Typography>
          </Box>

          <Divider
            flexItem
            orientation='vertical'
            className='home__cause-list-divider'
          />

          <Box className='home__cause-list-goal'>
            <Typography component='h6'>Goal</Typography>
            <Typography component='p'>$1200</Typography>
          </Box>
        </Box>
        <Typography
          variant='body2'
          className='home__cause-list-content'
          color='textSecondary'
          component='p'
        >
          {content}
        </Typography>
      </CardContent>

      <CardActions className='home__cause-list-card-actions'>
        <Button variant='contained' size='large'>
          Donate now
        </Button>
      </CardActions>
    </Card>
  )
}

CustomCard.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default CustomCard
