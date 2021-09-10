import React from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from 'components/CustomButton/CustomButton'
import Typography from 'components/Typography/CustomTypography'

import Container from 'components/CustommContainer/CustomContainer'
import Image from 'components/Image/Image'
import LinearWithValueLabel from './components/Progress'

import Swiper from './components/Swiper'
import SwiperAboutUs from './components/SwiperAboutUs'
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

      <Box className='home__cause-list'>
        <Container>
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
        </Container>
      </Box>

      <Box className='donators'>
        <Container>
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
        </Container>
      </Box>

      <Box className='about-us'>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
              <Paper className='about-us__paper'>
                <Image
                  className='about-us__image'
                  src='https://images.pexels.com/photos/3932961/pexels-photo-3932961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='about-us__image'
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
              <Box className='about-us__information'>
                <Typography
                  className='about-us__title'
                  component='h6'
                  variant='h6'
                >
                  About Us
                </Typography>

                <Typography className='about-us__content' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                  molestiae perspiciatis similique autem quibusdam praesentium,
                  vero consequuntur officia assumenda nemo natus, animi quaerat
                  quam obcaecati beatae a! Doloribus repellendus laboriosam
                  maiores, voluptatem neque minima magnam nostrum. Minima
                  necessitatibus earum quam.
                </Typography>

                <Button
                  className='about-us__button'
                  size='large'
                  variant='contained'
                >
                  read more
                </Button>
              </Box>

              <Box className='about-us__partners'>
                <Typography className='about-us__title'>Partners</Typography>

                <SwiperAboutUs className='about-us__swiper' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className='our-events'>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className='our-events__left'
            >
              <Typography
                component='h5'
                variant='h5'
                className='our-events__main-title'
              >
                Our Events
              </Typography>

              <Box className='our-events__item'>
                <Typography
                  component='h6'
                  variant='h6'
                  className='our-events__title'
                >
                  Demo Event Heading
                </Typography>

                <Typography component='p' className='our-events__moment'>
                  February, 10, 2016
                </Typography>

                <Typography component='p' className='our-events__content'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Typography>
              </Box>

              <Divider className='our-events__divider' />

              <Box className='our-events__item'>
                <Typography
                  component='h6'
                  variant='h6'
                  className='our-events__title'
                >
                  Demo Event Heading
                </Typography>

                <Typography component='p' className='our-events__moment'>
                  February, 10, 2016
                </Typography>

                <Typography component='p' className='our-events__content'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Typography>
              </Box>

              <Box className='our-events__button'>
                <Button size='large' variant='contained'>
                  view full event
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className='our-events__right'
            >
              <Box className='our-events__heading'>
                <Typography
                  component='h6'
                  variant='h6'
                  className='our-events__title'
                >
                  Event Heading
                </Typography>

                <Typography component='p' className='our-events__content'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has industry... standard
                  dummy
                </Typography>
              </Box>

              <Box className='our-events__list-images'>
                <Image
                  className='our-events__image-item'
                  src='https://images.pexels.com/photos/3553703/pexels-photo-3553703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='image-item'
                />

                <Image
                  className='our-events__image-item'
                  src='https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='image-item'
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Home
