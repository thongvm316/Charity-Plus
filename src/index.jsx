import React from 'react'
import { render } from 'react-dom'

import Test from './components/Test'
import TestTwo from './components/TestTwo'
import TestThree from './components/TestThree'
import TestFour from './components/TestFour'
import TestFive from './components/TestFive'
import TestSix from './components/TestSix'
import TestSevent from './components/TestSevent'

const App = () => {
  const [component, setComponent] = React.useState(null)

  return (
    <>
      <button>Button</button>
      <Test />
      <TestTwo />
      <TestThree />
      <TestFour />
      <TestFive />
      <TestSix />
      <TestSevent />
    </>
  )
}

render(<App />, document.getElementById('root'))
