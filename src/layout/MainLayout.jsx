import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import 'assets/scss/MainLayout/header.scss'

const MainLayout = () => {
  const [value, setValue] = React.useState(0)
  return (
    <>
      <AppBar className='header' position='static'>
        <Container fixed maxWidth='xl'>
          <Box className='header__contact'></Box>

          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            showLabels
          >
            <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
            <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Container>
      </AppBar>

      {/* <footer>Footer</footer> */}
    </>
  )
}

export default MainLayout
