import React from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from 'components/CustomButton/CustomButton'
import Typography from 'components/Typography/CustomTypography'

import Container from 'components/CustommContainer/CustomContainer'
import Image from 'components/Image/Image'

import ImageTitle from 'assets/img/aboutus/image-title.png'

import 'assets/scss/views/aboutus/about-us.scss'

const AboutUs = () => {
  return (
    <>
      <Box className='banner'>
        <Container>
          <Typography className='title' component='h6' variant='h6'>
            About Us
          </Typography>

          <Image
            className='image-title'
            alt='Background Banner'
            src={ImageTitle}
          />
        </Container>
      </Box>

      <Box className='volunteer'></Box>

      <Box className='statistical'></Box>

      <Box className='volunteer-detail'></Box>

      <Box className='our-partners'></Box>
    </>
  )
}

export default AboutUs
