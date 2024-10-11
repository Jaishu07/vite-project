import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navicate = useNavigate();

  function clidhandeler(){
    navicate('/About')
  }

  return (
    <div>
      home page
      <br />
      <button onClick={clidhandeler}>move to about page</button>
    </div>
  )
}

export default Home
