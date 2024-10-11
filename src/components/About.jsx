import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navicate = useNavigate()
  function handler(){
    navicate('/dasbord')
  }
  return (
    <div>
      about page
      <button onClick={handler}>go to dasbord</button>
    </div>
    
  )
}

export default About
