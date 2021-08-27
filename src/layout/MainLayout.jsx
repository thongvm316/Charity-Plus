import React from 'react'
import * as _ from 'lodash'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import TextField from '@material-ui/core/TextField'

import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import PhoneCallbackOutlinedIcon from '@material-ui/icons/PhoneCallbackOutlined'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Icon from '@material-ui/core/Icon'

import Image from 'components/Image/Image'
import Container from 'components/CustommContainer/CustomContainer'
import Logo from 'assets/img/logo.png'

import 'assets/scss/layout/main-layout.scss'

const MainLayout = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
    <>
      <Box className='header'>
        <Box className='header__contact'>
          <Container className='header__container-contact'>
            <p>
              <IconButton>
                <MailOutlineOutlinedIcon className='header__icon' />
              </IconButton>
              info@charityplus
            </p>
            <Divider
              orientation='vertical'
              className='header__divide'
              flexItem
            />
            <p>
              <IconButton>
                <PhoneCallbackOutlinedIcon className='header__icon' />
              </IconButton>
              +91 8857 665 660
            </p>
          </Container>
        </Box>

        <AppBar className='header__menu' color='transparent' position='static'>
          <Container className='header__container-menu'>
            <Grid container className='header__grid'>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
                <Image className='header__logo' src={Logo} alt='logo' />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor='primary'
                  textColor='primary'
                  centered
                  className='header__tabs'
                >
                  {menuLists.map((item, i) => (
                    <Tab className='header__tab' key={i} label={item} />
                  ))}
                </Tabs>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>

      <Box className='footer'>
        <Container className='footer__container'>
          <Box className='footer__copyright'>
            <Typography component='p'>Explore More</Typography>
            <Typography component='p'>
              COPYRIGHT © 2016 - CHARITY PLUS
            </Typography>
          </Box>

          <Divider className='footer__divider' />

          <Grid container className='footer__contact'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
              <Typography variant='h6' gutterBottom>
                {_.upperCase('Quick links')}
              </Typography>

              <MenuList>
                {menuLists.map((item, i) => (
                  <MenuItem key={i}>{_.upperCase(item)}</MenuItem>
                ))}
              </MenuList>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
              <Typography variant='h6' gutterBottom>
                {_.upperCase('Causes')}
              </Typography>

              <MenuList>
                {listCauses.map((item, i) => (
                  <MenuItem key={i}>{_.upperCase(item)}</MenuItem>
                ))}
              </MenuList>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
              <Typography variant='h6' gutterBottom>
                {_.upperCase('News letter')}
              </Typography>

              <Box className='footer__email-subscribe'>
                <TextField
                  label='Email Address'
                  id='outlined-margin-none'
                  variant='outlined'
                />
                <Button>{_.upperCase('subscribe now')}</Button>
              </Box>

              <Grid container className='footer__contact-detail'>
                <Typography variant='h6' gutterBottom>
                  {_.upperCase('Address')}
                </Typography>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <p>
                    {_.upperCase('Second street nagar indira complex, 86695')}
                  </p>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Typography component='p'>
                    {_.upperCase('Email : info@charityplus')}
                  </Typography>
                  <Typography component='p'>
                    {_.upperCase('Phone : +91 8857 665 660')}
                  </Typography>
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
    </>
  )
}

export default MainLayout
