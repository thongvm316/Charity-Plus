import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Pagination])

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Button from 'components/CustomButton/CustomButton'
import Typography from 'components/Typography/CustomTypography'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Container from 'components/CustommContainer/CustomContainer'
import Image from 'components/Image/Image'

import ImageTitle from 'assets/img/aboutus/image-title.png'
import VolunteerImageOne from 'assets/img/aboutus/volunteer-image1.jpg'
import VolunteerDetail1 from 'assets/img/aboutus/volunteer-detail1.jpg'
import VolunteerCard1 from 'assets/img/aboutus/volunteer-detail-card1.jpg'
import VolunteerCard2 from 'assets/img/aboutus/volunteer-detail-card2.jpg'
import VolunteerCard3 from 'assets/img/aboutus/volunteer-detail-card3.jpg'
import VolunteerCard4 from 'assets/img/aboutus/volunteer-detail-card4.jpg'

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
            <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
              <Image
                className='volunteer__image'
                alt='Volunteer'
                src={VolunteerImageOne}
              />
            </Grid>

            <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
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
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                el: '.volunteer__custom-pagination',
                renderBullet: function (index, className) {
                  return `<span class=${className}><i class="far fa-circle"></i></span>`
                },
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 10,
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

            <Box className='volunteer__custom-pagination'></Box>
          </Box>
        </Container>
      </Box>

      <Box className='statistical'>
        <Container className='statistical__container'>
          <Grid container className='statistical__grid-container'>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className='statistical__grid-item'
            >
              <Box>
                <IconButton className='statistical__icon'>
                  <Icon className='far fa-thumbs-up' />
                </IconButton>
              </Box>
              <Typography component='p' className='statistical__number'>
                555
              </Typography>
              <Typography component='p' className='statistical__text'>
                SUCCESSFUL PROJECTS
              </Typography>
            </Grid>

            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className='statistical__grid-item'
            >
              <Box>
                <IconButton className='statistical__icon'>
                  <Icon className='fas fa-award' />
                </IconButton>
              </Box>
              <Typography component='p' className='statistical__number'>
                23
              </Typography>
              <Typography component='p' className='statistical__text'>
                awards winner
              </Typography>
            </Grid>

            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className='statistical__grid-item'
            >
              <Box>
                <IconButton className='statistical__icon'>
                  <Icon className='far fa-user' />
                </IconButton>
              </Box>
              <Typography component='p' className='statistical__number'>
                320
              </Typography>
              <Typography component='p' className='statistical__text'>
                TOTAL VOLUNTEERS
              </Typography>
            </Grid>

            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className='statistical__grid-item'
            >
              <Box>
                <IconButton className='statistical__icon'>
                  <Icon className='fas fa-star-and-crescent' />
                </IconButton>
              </Box>
              <Typography component='p' className='statistical__number'>
                89000$
              </Typography>
              <Typography component='p' className='statistical__text'>
                TOTAL AMOUNT RAISED
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className='volunteer-detail'>
        <Container className='volunteer-detail__container'>
          <Grid
            container
            className='volunteer-detail__item volunteer-detail__item--custom-block-one'
          >
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Image
                src={VolunteerDetail1}
                className='volunteer-detail__image-one'
                alt='volunteer-detail'
              />
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Box className='volunteer-detail__info volunteer-detail__info--custom-margin'>
                <Box className='volunteer-detail__icon-block-one'>
                  <Icon className='far fa-smile'></Icon>
                </Box>

                <Typography
                  component='h6'
                  variant='h6'
                  className='volunteer-detail__item-title'
                >
                  Our Vision
                </Typography>

                <Typography component='p' className='volunteer-detail__content'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Box>

              <Box className='volunteer-detail__info'>
                <Box className='volunteer-detail__icon-block-one'>
                  <Icon className='far fa-heart'></Icon>
                </Box>

                <Typography
                  component='h6'
                  variant='h6'
                  className='volunteer-detail__item-title'
                >
                  Our Vision
                </Typography>

                <Typography component='p' className='volunteer-detail__content'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider className='volunteer-detail__divider' />

          <Box className='volunteer-detail__item'>
            <Typography
              component='h5'
              variant='h5'
              className='volunteer-detail__title'
            >
              Our Volunteers
            </Typography>

            <Grid container className='volunteer-detail__grid-container'>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card className='volunteer-detail__card'>
                  <CardActionArea className='volunteer-detail__card-area'>
                    <CardMedia
                      className='volunteer-detail__card-media'
                      image={VolunteerCard1}
                      title='Contemplative Reptile'
                    />
                    <Box className='volunteer-detail__card-icons'>
                      <IconButton>
                        <Icon
                          className='fab fa-facebook-f'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon
                          className='fab fa-twitter'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon className='fab fa-google' fontSize='small'></Icon>
                      </IconButton>
                    </Box>
                    <CardContent className='volunteer-detail__card-content'>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        className='volunteer-detail__card-title'
                      >
                        Volunteer name
                      </Typography>
                      <Typography
                        variant='body2'
                        component='p'
                        className='volunteer-detail__card-content-detail'
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card className='volunteer-detail__card'>
                  <CardActionArea className='volunteer-detail__card-area'>
                    <CardMedia
                      className='volunteer-detail__card-media'
                      image={VolunteerCard2}
                      title='Contemplative Reptile'
                    />
                    <Box className='volunteer-detail__card-icons'>
                      <IconButton>
                        <Icon
                          className='fab fa-facebook-f'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon
                          className='fab fa-twitter'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon className='fab fa-google' fontSize='small'></Icon>
                      </IconButton>
                    </Box>
                    <CardContent className='volunteer-detail__card-content'>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        className='volunteer-detail__card-title'
                      >
                        Volunteer name
                      </Typography>
                      <Typography
                        variant='body2'
                        component='p'
                        className='volunteer-detail__card-content-detail'
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card className='volunteer-detail__card'>
                  <CardActionArea className='volunteer-detail__card-area'>
                    <CardMedia
                      className='volunteer-detail__card-media'
                      image={VolunteerCard3}
                      title='Contemplative Reptile'
                    />
                    <Box className='volunteer-detail__card-icons'>
                      <IconButton>
                        <Icon
                          className='fab fa-facebook-f'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon
                          className='fab fa-twitter'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon className='fab fa-google' fontSize='small'></Icon>
                      </IconButton>
                    </Box>
                    <CardContent className='volunteer-detail__card-content'>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        className='volunteer-detail__card-title'
                      >
                        Volunteer name
                      </Typography>
                      <Typography
                        variant='body2'
                        component='p'
                        className='volunteer-detail__card-content-detail'
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card className='volunteer-detail__card'>
                  <CardActionArea className='volunteer-detail__card-area'>
                    <CardMedia
                      className='volunteer-detail__card-media'
                      image={VolunteerCard4}
                      title='Contemplative Reptile'
                    />
                    <Box className='volunteer-detail__card-icons'>
                      <IconButton>
                        <Icon
                          className='fab fa-facebook-f'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon
                          className='fab fa-twitter'
                          fontSize='small'
                        ></Icon>
                      </IconButton>
                      <IconButton>
                        <Icon className='fab fa-google' fontSize='small'></Icon>
                      </IconButton>
                    </Box>
                    <CardContent className='volunteer-detail__card-content'>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        className='volunteer-detail__card-title'
                      >
                        Volunteer name
                      </Typography>
                      <Typography
                        variant='body2'
                        component='p'
                        className='volunteer-detail__card-content-detail'
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box className='our-partners'>
        <Container className='our-partners__container'>
          <Typography
            className='our-partners__main-title'
            variant='h5'
            component='h5'
          >
            Our Partners
          </Typography>

          <Box className='our-partners__swiper'>
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                el: '.our-partners__swiper-pagination',
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
            <Box className='our-partners__swiper-pagination'></Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AboutUs
