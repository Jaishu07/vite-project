import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dasbord = () => {
  const navicate = useNavigate()
  function handler(){
    navicate('/dasbord/courses')
  }
  return (
    <div >
      dasbord page
      <br />
      <br />
      <button onClick={handler}>cousers here</button>
      <Outlet/>
    </div>
  )
}

export default Dasbord
