import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from 'components/CustommContainer/CustomContainer'

import Swiper from './components/Swiper'

import 'assets/scss/views/home/home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Container className='home__container'>
        <Box className='home__banner'>
          <Box className='home__banner-title'>
            <Typography component='h1'>
              Give a helping hand <br />
              <span>to those who need it</span>
            </Typography>

            <Button variant='outlined' color='primary'>
              donate now
            </Button>
          </Box>

          <Box className='home__banner-swipe'>
            <Swiper />
          </Box>
        </Box>

        <Box className='home__cause-list'></Box>

        <Box className='home__donators'></Box>

        <Box className='home__about-us'></Box>

        <Box className='home__our-events'></Box>
      </Container>
    </div>
  )
}

export default Home
