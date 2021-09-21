import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Pagination])

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Slider from 'components/Slider/Slider'
import Button from 'components/CustomButton/CustomButton'
import Typography from 'components/Typography/CustomTypography'
import Container from 'components/CustommContainer/CustomContainer'

import ImageTitle from 'assets/img/aboutus/image-title.png'
import Image from 'components/Image/Image'

import Image1 from 'assets/img/causes/image1.jpg'
import Image2 from 'assets/img/causes/image2.jpg'
import Image3 from 'assets/img/causes/image3.jpg'
import Image4 from 'assets/img/causes/image4.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'assets/scss/views/causes/causes.scss'

const Causes = () => {
  const swiperRef = React.useRef(null)

  return (
    <>
      <Box className='causes-banner'>
        <Container className='causes-banner__container'>
          <Box className='causes-banner__information'>
            <Typography
              className='causes-banner__title'
              component='h6'
              variant='h6'
            >
              Causes
            </Typography>

            <Image
              className='causes-banner__image-title'
              alt='Background banner'
              src={ImageTitle}
            />
          </Box>
        </Container>
      </Box>

      <Box className='causes-featurd'>
        <Container className='causes-featurd__container'>
          <Box className='causes-featurd__header'>
            <Typography
              className='causes-featurd__main-title'
              component='h5'
              variant='h5'
            >
              Featurd Causes
            </Typography>
            <Typography component='p' className='causes-featurd__title-detail'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </Typography>
          </Box>

          <Grid className='causes-featurd__grid-container' container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={8}
              className='causes-featurd__grid-item'
            >
              <Paper
                className='causes-featurd__paper causes-featurd__paper--flex causes-featurd__paper--bottom'
                variant='outlined'
              >
                <Image
                  src={Image1}
                  alt='causes-featurd__image'
                  className='causes-featurd__image-one'
                ></Image>

                <Box className='causes-featurd__donate'>
                  <Typography className='causes-featurd__donate-title'>
                    Senior Citizens
                  </Typography>

                  <Typography className='causes-featurd__donate-content'>
                    Long established fact that a reader will distracted by the
                    readable content of a page when looking at its layout.
                  </Typography>

                  <Box className='causes-featurd__range'>
                    <Box className='causes-featurd__raise'>
                      <Typography className='causes-featurd__raised'>
                        Raised <br />
                        <span>$700</span>
                      </Typography>

                      <Typography className='causes-featurd__goal'>
                        Goal <br /> <span>$1200</span>
                      </Typography>
                    </Box>

                    <Slider
                      value={700}
                      color='secondary'
                      aria-labelledby='discrete-slider'
                      min={0}
                      max={1200}
                      className='causes-featurd__slider'
                    />
                  </Box>

                  <Box className='causes-featurd__donate-button'>
                    <Button variant='contained' size='large'>
                      Donate now
                    </Button>
                  </Box>
                </Box>
              </Paper>

              <Box className='causes-featurd__topic'>
                <Card className='causes-featurd__topic-card causes-featurd__topic-card--margin'>
                  <CardActionArea className='causes-featurd__topic-action-area'>
                    <CardMedia
                      className='causes-featurd__topic-media'
                      image={Image3}
                      title='Contemplative Reptile'
                    />
                    <CardContent className='causes-featurd__topic-card-content'>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className='causes-featurd__topic-content'
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      className='causes-featurd__topic-button'
                    >
                      Share
                    </Button>
                  </CardActions>
                </Card>

                <Card className='causes-featurd__topic-card'>
                  <CardActionArea className='causes-featurd__topic-action-area'>
                    <CardMedia
                      className='causes-featurd__topic-media'
                      image={Image4}
                      title='Contemplative Reptile'
                    />
                    <CardContent className='causes-featurd__topic-card-content'>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className='causes-featurd__topic-content'
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      className='causes-featurd__topic-button'
                    >
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Box>

              <Paper
                className='causes-featurd__paper causes-featurd__paper--flex'
                variant='outlined'
              >
                <Image
                  src={Image2}
                  alt='causes-featurd__image'
                  className='causes-featurd__image-one'
                ></Image>

                <Box className='causes-featurd__donate'>
                  <Typography className='causes-featurd__donate-title'>
                    Playground
                  </Typography>

                  <Typography className='causes-featurd__donate-content'>
                    Long established fact that a reader will distracted by the
                    readable content of a page when looking at its layout.
                  </Typography>

                  <Box className='causes-featurd__range'>
                    <Box className='causes-featurd__raise'>
                      <Typography className='causes-featurd__raised'>
                        Raised <br />
                        <span>$800</span>
                      </Typography>

                      <Typography className='causes-featurd__goal'>
                        Goal <br /> <span>$1200</span>
                      </Typography>
                    </Box>

                    <Slider
                      value={800}
                      color='secondary'
                      aria-labelledby='discrete-slider'
                      min={0}
                      max={1200}
                      className='causes-featurd__slider'
                    />
                  </Box>

                  <Box className='causes-featurd__donate-button'>
                    <Button variant='contained' size='large'>
                      Donate now
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={4}
              className='causes-featurd__grid-item'
            >
              <Box className='causes-featurd__events'>
                <Typography className='causes-featurd__events-title'>
                  Featured Events
                </Typography>

                <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  loop={true}
                  className='causes-featurd__events-swiper'
                >
                  <SwiperSlide className='causes-featurd__events-swiper-slide'>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                        <Box className='causes-featurd__swiper-date'>
                          <Typography component='h5' variant='h5'>
                            5
                          </Typography>
                          <Typography component='p'>
                            March <br />
                            2021
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
                        <Typography
                          component='h5'
                          variant='h5'
                          className='causes-featurd__swiper-header'
                        >
                          Heading Here
                        </Typography>
                        <Typography
                          component='p'
                          variant='p'
                          className='causes-featurd__swiper-content'
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry... Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown.
                        </Typography>
                      </Grid>
                    </Grid>

                    <Divider className='causes-featurd__swiper-divider' />

                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
                        <Box className='causes-featurd__swiper-date'>
                          <Typography component='h5' variant='h5'>
                            5
                          </Typography>
                          <Typography component='p'>
                            March <br />
                            2021
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={9}>
                        <Typography
                          component='h5'
                          variant='h5'
                          className='causes-featurd__swiper-header'
                        >
                          Heading Here
                        </Typography>
                        <Typography
                          component='p'
                          variant='p'
                          className='causes-featurd__swiper-content'
                        >
                          Lorem Ipsum is simply dummy text of the printing ...
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown.
                        </Typography>
                      </Grid>
                    </Grid>
                  </SwiperSlide>
                </Swiper>

                <Box className='causes-featurd__events-buttons'>
                  <IconButton>
                    <Icon className='far fa-arrow-alt-circle-left'></Icon>
                  </IconButton>
                  <IconButton>
                    <Icon className='far fa-arrow-alt-circle-right'></Icon>
                  </IconButton>
                </Box>
              </Box>

              <Box className='causes-featurd__video'></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className='causes-partners'>
        <Container className='causes-partners__container'>
          <Typography
            className='causes-partners__main-title'
            variant='h5'
            component='h5'
          >
            Our Partners
          </Typography>

          <Box className='causes-partners__swiper'>
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                el: '.causes-partners__swiper-pagination',
                renderBullet: function (index, className) {
                  return `<span class=${className}><i class="far fa-circle"></i></span>`
                },
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 5,
                },
                1920: {
                  slidesPerView: 6,
                },
              }}
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
            <Box className='causes-partners__swiper-pagination'></Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Causes
