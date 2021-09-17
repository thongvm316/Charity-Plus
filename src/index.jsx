import React from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import MainLayout from 'layout/MainLayout'

import './index.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/layout' component={MainLayout} />
        <Redirect from='/' to='/layout/home' />
      </Switch>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
