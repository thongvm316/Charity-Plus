import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from 'components/CustomButton/CustomButton'
import Typography from 'components/Typography/CustomTypography'

import Container from 'components/CustommContainer/CustomContainer'
import Image from 'components/Image/Image'

import ImageTitle from 'assets/img/aboutus/image-title.png'
import VolunteerImageOne from 'assets/img/aboutus/volunteer-image1.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'assets/scss/views/aboutus/about-us.scss'

const AboutUs = () => {
  return (
    <>
      <Box className='banner'>
        <Container className='banner__container'>
          <Box className='banner__information'>
            <Typography className='banner__title' component='h6' variant='h6'>
              About Us
            </Typography>

            <Image
              className='banner__image-title'
              alt='Background Banner'
              src={ImageTitle}
            />
          </Box>
        </Container>
      </Box>

      <Box className='volunteer'>
        <Container className='volunteer__container'>
          <Grid container className='volunteer__layout'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
              <Image
                className='volunteer__image'
                alt='Volunteer'
                src={VolunteerImageOne}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
              <Box className='volunteer__information'>
                <Typography
                  component='h6'
                  variant='h6'
                  className='volunteer__title'
                >
                  About Us
                </Typography>

                <Typography component='p' className='volunteer__content'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release.
                </Typography>

                <Button
                  className='volunteer__button'
                  variant='contained'
                  size='large'
                >
                  become a volunteer
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box className='volunteer__swiper'>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              className='mySwiper'
            >
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                  alt='volunteer-image'
                />
              </SwiperSlide>
            </Swiper>
            <p>pagination</p>
          </Box>
        </Container>
      </Box>

      <Box className='statistical'></Box>

      <Box className='volunteer-detail'></Box>

      <Box className='our-partners'></Box>
    </>
  )
}

export default AboutUs
