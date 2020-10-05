// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // const usernameRef = useRef(null)
  const [username, setUsername] = useState('')
  // const [errorMessage, setErrorMessage] = useState(null)

  // const isLowerCase = value => value === value.toLowerCase()

  const handleChange = event => {
    setUsername(event.target.value.toLowerCase())
    // setErrorMessage(
    //   isLowerCase(event.target.value) ? null : 'Username must be lower case',
    // )
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
    // onSubmitUsername(event.target.elements.username.value)
    // onSubmitUsername(usernameRef.current.value)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          // ref={usernameRef}
          onChange={handleChange}
          value={username}
        />
      </div>
      {/* {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>} */}
      {/* <button type="submit" disabled={!!errorMessage}> */}
      {/* <button type="submit" disabled={Boolean(errorMessage)}> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
