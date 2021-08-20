import React from 'react'
import { render } from 'react-dom'

import { Button } from '@material-ui/core'

import Test from './components/Test'
import TestTwo from './components/TestTwo'
import TestThree from './components/TestThree'

const App = () => {
  const [component, setComponent] = React.useState(null)

  return (
    <>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      <Test />
      <TestTwo />
      <TestThree />
    </>
  )
}

render(<App />, document.getElementById('root'))
