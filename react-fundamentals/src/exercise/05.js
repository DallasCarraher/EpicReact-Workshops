// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>
    large orange box
  </Box>
)
const sizeLessBox = (
  <Box style={{backgroundColor: 'white', fontStyle: 'italic'}}>
    sizeless box
  </Box>
)

function Box({size, style, children}) {
  const className = size ? `box box--${size}` : 'box'
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizeLessBox}
    </div>
  )
}

export default App
