import React from 'react'
// import Component from 'components/Component'

const Home = () => {
  const [component, setComponent] = React.useState(null)

  const showComp = () => {
    import('components/Component.jsx').then((Component) =>
      setComponent(Component.default),
    )
  }

  return (
    <div>
      <button onClick={showComp}>Button</button>
      {component ? component : null}
      {/* <Component /> */}
    </div>
  )
}

export default Home
