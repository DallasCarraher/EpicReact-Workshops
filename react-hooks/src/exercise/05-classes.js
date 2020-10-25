// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05-classes.js

import React from 'react'
import VanillaTilt from 'vanilla-tilt'

// If you'd rather practice refactoring a class component to a function
// component with hooks, then go ahead and do this exercise.

function Tilt({ children }) {
  const tiltRef = React.useRef()

  React.useEffect(() => {
    const tiltNode = tiltRef.current
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode, vanillaTiltOptions)
    return () => tiltRef.vanillaTilt.destroy()
  }, [])

  return (
      <div ref={tiltRef} className="tilt-root">
        <div className="tilt-child">{children}</div>
      </div>
  )
}

// class Tilt extends React.Component {
//   componentDidMount() {
//   }
//   componentWillUnmount() {
//   }
//   render() {
//   }
// }

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
