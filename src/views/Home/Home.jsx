import React from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from 'components/CustomButton/CustomButton'
import Typography from '@material-ui/core/Typography'
import Container from 'components/CustommContainer/CustomContainer'
import Image from 'components/Image/Image'

import Swiper from './components/Swiper'
import Card from './components/Card'

import Food from 'assets/img/home/food.png'
import Health from 'assets/img/home/health.png'
import Water from 'assets/img/home/water.png'

import 'assets/scss/views/home/home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Box className='home__banner'>
        <Container className='home__banner-container'>
          <Box className='home__banner-title'>
            <Typography component='h1'>
              Give a helping hand <br />
              <span>to those who need it</span>
            </Typography>

            <Button variant='outlined'>donate now</Button>
          </Box>

          <Box className='home__banner-swipe'>
            <Swiper />
          </Box>
        </Container>
      </Box>

      <Container className='home__container'>
        <Box className='home__cause-list'>
          <Box className='home__cause-list-title'>
            <Typography component='h5' variant='h5'>
              Cause List
            </Typography>
            <Typography component='p'>
              WE NEED YOUR HELP TO HELP OTHERS
            </Typography>
          </Box>

          <Box className='home__cause-list-options'>
            <Card
              className='home__cause-list-card'
              header='Food'
              image={Food}
              content='Lorem Ipsum is simply dummy 
              of the printing and typesetting industry 
              Lorem Ipsum.'
            />
            <Card
              className='home__cause-list-card'
              header='Health'
              image={Health}
              content='Lorem Ipsum is simply dummy 
              of the printing and typesetting industry 
              Lorem Ipsum.'
            />
            <Card
              className='home__cause-list-card'
              header='Water'
              image={Water}
              content='Lorem Ipsum is simply dummy 
              of the printing and typesetting industry 
              Lorem Ipsum.'
            />
          </Box>
        </Box>

        <Box className='donators'>
          <Box className='donators__tile'>
            <Typography component='h5' variant='h5'>
              Donators
            </Typography>
            <Typography component='p'>
              Help us reach our goal Donate now
            </Typography>
          </Box>

          <Box className='donators__information'>
            <Box className='donators__featured'>
              <Typography component='h6' className='donators__featured-title'>
                Featured Donators
              </Typography>

              <Box className='donators__featured-images'>
                <Image
                  src='https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                  alt='image-1'
                />
                <Image
                  src='https://images.pexels.com/photos/2971098/pexels-photo-2971098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='image-2'
                />
                <Image
                  src='https://images.pexels.com/photos/2073873/pexels-photo-2073873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='image-3'
                />
              </Box>

              <Box className='donators__featured-name'></Box>
            </Box>

            <Divider
              flexItem
              orientation='vertical'
              className='donators__divider'
            />

            <Box className='donators__now'></Box>
          </Box>
        </Box>

        <Box className='about-us'></Box>

        <Box className='our-events'></Box>
      </Container>
    </div>
  )
}

export default Home
