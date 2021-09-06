import React from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Button from 'components/CustomButton/CustomButton'
import Typography from 'components/Typography/CustomTypography'

import Container from 'components/CustommContainer/CustomContainer'
import Image from 'components/Image/Image'
import LinearWithValueLabel from './components/Progress'

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

          <Grid container className='home__cause-list-options'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
              <Card
                className='home__cause-list-card'
                header='Food'
                image={Food}
                content='Lorem Ipsum is simply dummy 
                  of the printing and typesetting industry 
                  Lorem Ipsum.'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
              <Card
                className='home__cause-list-card'
                header='Health'
                image={Health}
                content='Lorem Ipsum is simply dummy 
                  of the printing and typesetting industry 
                  Lorem Ipsum.'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
              <Card
                className='home__cause-list-card'
                header='Water'
                image={Water}
                content='Lorem Ipsum is simply dummy 
                of the printing and typesetting industry 
                Lorem Ipsum.'
              />
            </Grid>
          </Grid>
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

          <Grid container className='donators__information'>
            <Grid
              item
              className='donators__featured'
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={5}
            >
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

              <Box className='donators__featured-name'>
                <div>
                  <Typography component='h6'>name here</Typography>
                  <Typography component='p'>
                    donated <span>$800</span>
                  </Typography>
                </div>
                <div>
                  <Typography component='h6'>name here</Typography>
                  <Typography component='p'>
                    donated <span>$800</span>
                  </Typography>
                </div>
                <div>
                  <Typography component='h6'>name here</Typography>
                  <Typography component='p'>
                    donated <span>$800</span>
                  </Typography>
                </div>
              </Box>
            </Grid>

            <Grid
              item
              className='donators__divider'
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={2}
            >
              <Divider flexItem orientation='vertical' />
            </Grid>

            <Grid
              item
              className='donators__now'
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={5}
            >
              <Typography component='h6' className='donators__now-title'>
                Donate Now
              </Typography>

              <Box className='donators__now-raised'>
                <LinearWithValueLabel />
                <Box className='donators__now-raised-detail'>
                  <Typography component='p'>
                    raised&nbsp;<span>$2000</span>
                  </Typography>
                  <Typography component='p'>
                    goal&nbsp;<span>$150,000,00</span>
                  </Typography>
                </Box>
              </Box>

              <Box className='donators__now-end-time'>
                <Typography component='h6'>ends</Typography>

                <Box className='donators__now-end-time-detail'>
                  <Typography component='p'>
                    <span>20</span>
                    <span>days</span>
                  </Typography>

                  <Typography component='p'>
                    <span>20</span>
                    <span>hr</span>
                  </Typography>

                  <Typography component='p'>
                    <span>20</span>
                    <span>min</span>
                  </Typography>

                  <Typography component='p'>
                    <span>20</span>
                    <span>sec</span>
                  </Typography>
                </Box>

                <Button variant='contained'>donate now</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className='about-us'></Box>

        <Box className='our-events'></Box>
      </Container>
    </div>
  )
}

export default Home
