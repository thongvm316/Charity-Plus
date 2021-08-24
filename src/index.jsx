import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from 'layout/MainLayout'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainLayout />
        </Route>
      </Switch>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
