import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import TextField from '@material-ui/core/TextField'

import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Icon from '@material-ui/core/Icon'

import Container from 'components/CustommContainer/CustomContainer'

import 'assets/scss/components/footer.scss'

const Footer = () => {
  const menuLists = ['home', 'about us', 'causes', 'events', 'pages', 'contact']

  const listCauses = [
    'Education',
    'food',
    'awarness',
    'water',
    'health',
    'lifesaving',
    'children aid',
    'senior',
  ]

  return (
    <Box className='footer'>
      <Container className='footer__container'>
        <Box className='footer__copyright'>
          <Typography component='p'>Explore More</Typography>
          <Typography component='p'>COPYRIGHT © 2016 - CHARITY PLUS</Typography>
        </Box>

        <Divider className='footer__divider' />

        <Grid container className='footer__contact'>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
            <Typography className='footer__title' variant='h6'>
              Quick links
            </Typography>

            <MenuList className='footer__menu-list'>
              {menuLists.map((item, i) => (
                <MenuItem key={i}>{item}</MenuItem>
              ))}
            </MenuList>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
            <Typography className='footer__title' variant='h6'>
              Causes
            </Typography>

            <MenuList className='footer__menu-list'>
              {listCauses.map((item, i) => (
                <MenuItem key={i}>{item}</MenuItem>
              ))}
            </MenuList>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
            <Typography className='footer__title' variant='h6'>
              News letter
            </Typography>

            <Box className='footer__email-subscribe'>
              <TextField
                placeholder='Email Address'
                id='outlined-margin-none'
                variant='standard'
                className='footer__email-input'
              />
              <Button size='large' className='footer__button'>
                subscribe now
              </Button>
            </Box>

            <Grid container className='footer__contact-detail'>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant='h6'
                  className='footer__title footer__title-contact-detail'
                  gutterBottom
                >
                  Address
                </Typography>
              </Grid>

              <Grid
                item
                className='footer__information-contact'
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Typography component='p'>Second street nagar</Typography>
                <Typography component='p'>indira complex, 86695</Typography>
              </Grid>

              <Grid
                item
                className='footer__information-contact'
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Typography component='p'>Email : info@charityplus</Typography>
                <Typography component='p'>Phone : +91 8857 665 660</Typography>
              </Grid>
            </Grid>

            <Box className='footer__social'>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <Icon className='fab fa-google-plus-square' />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
