import React from 'react'
import { render } from 'react-dom'

import Home from 'views/Home/Home'
import './index.scss'

const App = () => {
  return <Home />
}

render(<App />, document.getElementById('root'))
