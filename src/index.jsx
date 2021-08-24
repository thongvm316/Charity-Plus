import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from 'views/Home'
import Test from 'components/Test'
const LazyTable = React.lazy(() => import('views/Table'))
const LazyChart = React.lazy(() => import('views/Chart'))
// import Table from 'views/Table'
// import Chart from 'views/Chart'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/table'>About</Link>
            </li>
            <li>
              <Link to='/chart'>Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <React.Suspense fallback='Loading...'>
              <Route exact path='/' component={Home} />
              <Route exact path='/table' component={LazyTable} />
              <Route exact path='/chart' component={LazyChart} />
            </React.Suspense>
          </Switch>
        </div>
      </Router>
      <Test />
    </>
  )
}

render(<App />, document.getElementById('root'))
