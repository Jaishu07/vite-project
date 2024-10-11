import React from 'react'
import Home from './Home'
import About from './About'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='nav'>
        <h3>coderow</h3>
         <ul>
            <li>
                <NavLink to="/" className={({isActive})=>
                isActive? "active-link":""}> Home</NavLink>
            </li>
            <li>
                <NavLink to='/About' className={({isActive})=>
                isActive? "active-link":""}>About</NavLink>
            </li>
            <li>
                <NavLink to='/Dasbord' className={({isActive})=>
                isActive? "active-link":""}>Dasbord</NavLink>
            </li>
         </ul>
    </div>
  )
}

export default Navbar
