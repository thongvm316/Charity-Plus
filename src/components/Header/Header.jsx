import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import PhoneCallbackOutlinedIcon from '@material-ui/icons/PhoneCallbackOutlined'
import Divider from '@material-ui/core/Divider'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Image from 'components/Image/Image'
import Container from 'components/CustommContainer/CustomContainer'
import Logo from 'assets/img/logo.png'

import 'assets/scss/components/header.scss'

const Header = () => {
  const matches = useMediaQuery('(max-width:959.9px)')

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const menuLists = [
    { page: 'home', linkTo: `/layout/home` },
    { page: 'about us', linkTo: `/layout/about-us` },
    { page: 'causes', linkTo: `/layout/causes` },
    { page: 'events', linkTo: `/layout/events` },
    { page: 'pages', linkTo: `/layout/pages` },
    { page: 'contact', linkTo: `/layout/contact` },
  ]

  const tabsClass = classNames({
    header__tabs: true,
    'header__tabs--hide': matches,
  })

  return (
    <Box className='header'>
      <Box className='header__contact'>
        <Container className='header__container-contact'>
          <p>
            <IconButton>
              <MailOutlineOutlinedIcon className='header__icon' />
            </IconButton>
            info@charityplus
          </p>
          <Divider orientation='vertical' className='header__divide' flexItem />
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
            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
              <Image className='header__logo' src={Logo} alt='logo' />
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                centered
                className={tabsClass}
              >
                {menuLists.map((item, i) => (
                  <Tab
                    className='header__tab'
                    component={Link}
                    to={item.linkTo}
                    key={i}
                    label={item.page}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
