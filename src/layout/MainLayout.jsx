import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import routes from '../routes'

const MainLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={`/layout${prop.path}`}
          component={prop.component}
          key={key}
        />
      )
    })
  }

  return (
    <>
      <Header />

      {/* <Box className='main'>
        <Switch>
          {getRoutes(routes)}
          <Redirect from='/layout' to='/layout/home' />
        </Switch>
      </Box> */}

      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
