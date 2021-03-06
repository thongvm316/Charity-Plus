import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from 'components/Typography/CustomTypography'

import SwiperCore, { EffectCoverflow } from 'swiper'
SwiperCore.use([EffectCoverflow])

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'assets/scss/views/home/swiper.scss'

const SwiperComponent = () => {
  return (
    <div className='swiper-home'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        className='mySwiper'
      >
        <SwiperSlide className='swiper-home__slide'>
          <Card variant='outlined' className='swiper-home__card'>
            <CardActionArea className='swiper-home__action-area'>
              <CardMedia
                className='swiper-home__card-media'
                image='https://images.pexels.com/photos/2832055/pexels-photo-2832055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                title='Contemplative Reptile'
              />
              <CardContent className='swiper-home__card-content'>
                <Typography gutterBottom variant='h5' component='h2'>
                  Featured causes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='swiper-home__slide'>
          <Card variant='outlined' className='swiper-home__card'>
            <CardActionArea className='swiper-home__action-area'>
              <CardMedia
                className='swiper-home__card-media'
                image='https://images.pexels.com/photos/4784017/pexels-photo-4784017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='img-swiper'
              />
              <CardContent className='swiper-home__card-content'>
                <Typography gutterBottom variant='h5' component='h2'>
                  BECOME A VOLUNTEER
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='swiper-home__slide'>
          <Card variant='outlined' className='swiper-home__card'>
            <CardActionArea className='swiper-home__action-area'>
              <CardMedia
                className='swiper-home__card-media'
                image='https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='img-swiper'
              />
              <CardContent className='swiper-home__card-content'>
                <Typography gutterBottom variant='h5' component='h2'>
                  Donate now
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperComponent
