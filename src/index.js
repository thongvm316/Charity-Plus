import React from 'react'
import camelCase from 'lodash/camelCase'

import { makeStyles } from '@material-ui/core/styles'

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core'

// import Test from './components/Test'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

import { render } from 'react-dom'

const App = () => {
  const classes = useStyles()
  const [Test, setTest] = React.useState(null)

  const bull = <span className={classes.bullet}>•</span>
  // const showText = () => {
  //   import('lodash').then(({ default: _ }) => {
  //     setText(_.camelCase('wef wefwef'))
  //   })
  // }

  // const showText = async () => {
  //   const { default: _ } = await import('lodash')
  //   setText(_.camelCase('wef wefwef'))
  // }

  // const showText = () => {
  //   import('./components/Test').then((Test) => setTest(Test.default))
  // }

  const showText = async () => {
    const { default: Test } = await import('./components/Test')
    setTest(Test)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant='h5' component='h2'>
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          adjective
        </Typography>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' onClick={showText}>
          Button
        </Button>
        <h1>Oh hai, {camelCase('minh thong')}</h1>
        {/* {text ? text : null} */}
        {Test ? Test : null}
      </CardActions>
    </Card>
  )
}

render(<App />, document.getElementById('root'))
