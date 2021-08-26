import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Container from 'components/CustommContainer/CustomContainer'
import IconButton from '@material-ui/core/IconButton'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import PhoneCallbackOutlinedIcon from '@material-ui/icons/PhoneCallbackOutlined'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import 'assets/scss/layout/main-layout.scss'

const MainLayout = () => {
  const [value, setValue] = React.useState(0)
  return (
    <>
      <Box className='header'>
        <Box className='header__contact'>
          <Container className='header__container'>
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

        <AppBar className='header__menu' position='static'>
          <Container>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
              showLabels
            >
              <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
              <BottomNavigationAction
                label='Favorites'
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label='Nearby'
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
          </Container>
        </AppBar>
      </Box>

      <Box className='footer'></Box>
    </>
  )
}

export default MainLayout
