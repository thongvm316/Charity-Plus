import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import PhoneCallbackOutlinedIcon from '@material-ui/icons/PhoneCallbackOutlined'

import Image from 'components/Image/Image'
import Container from 'components/CustommContainer/CustomContainer'
import Logo from 'assets/img/logo.png'

const Header = () => {
  const matchesForMenuList = useMediaQuery('(max-width:959.9px)')
  const matchesForIconBars = useMediaQuery('(min-width:960px)')

  const [value, setValue] = React.useState(0)
  const [isHideMenuList, setIsHideMenuList] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIsHideMenuList = () => {
    setIsHideMenuList((prev) => !prev)
  }

  const menuLists = [
    { page: 'home', linkTo: `/layout/home` },
    { page: 'about us', linkTo: `/layout/about-us` },
    { page: 'causes', linkTo: `/layout/causes` },
    { page: 'events', linkTo: `/layout/events` },
    { page: 'pages', linkTo: `/layout/pages` },
    { page: 'contact', linkTo: `/layout/contact` },
  ]

  const iconBarsClass = classNames({
    'header__icon-bars': true,
    'icon-bars-hide': matchesForIconBars,
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
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Image className='header__logo' src={Logo} alt='logo' />
            </Grid>
            <Grid
              item
              className={iconBarsClass}
              xs={9}
              sm={9}
              md={9}
              lg={9}
              xl={9}
            >
              <IconButton onClick={handleChangeIsHideMenuList}>
                <Icon className='fas fa-bars' />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Collapse in={!matchesForMenuList || isHideMenuList}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor='primary'
                  textColor='primary'
                  centered
                  className='header__tabs'
                >
                  {menuLists.map((item, i) => (
                    <Tab
                      className='header__tab'
                      onClick={handleChangeIsHideMenuList}
                      component={Link}
                      to={item.linkTo}
                      key={i}
                      label={item.page}
                    />
                  ))}
                </Tabs>
              </Collapse>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
