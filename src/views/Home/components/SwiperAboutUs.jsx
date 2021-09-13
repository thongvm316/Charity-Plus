import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Box from '@material-ui/core/Box'

import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

import 'swiper/css'
import 'swiper/css/navigation'

const SwiperAboutUs = (props) => {
  const { ...rest } = props

  const swiperRef = React.useRef(null)

  return (
    <>
      <Grid container>
        <Grid item xs={10} sm={11} md={11} lg={11} xl={11}>
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            {...rest}
          >
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/4491469/pexels-photo-4491469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </SwiperSlide>
          </Swiper>
        </Grid>

        <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
          <Box className='about-us__swiper-navigation'>
            <div>
              <Button
                id='previousButton'
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <ArrowBackIosIcon />
              </Button>
            </div>
            <div>
              <Button
                id='nextButton'
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default SwiperAboutUs
