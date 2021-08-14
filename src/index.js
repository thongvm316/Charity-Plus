import React from 'react'
import Button from '@material-ui/core/Button'

import { render } from 'react-dom'

const App = () => {
  return (
    <div>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
