import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div className='nav'>
    <NavLink to={'/'} className='margin-right' data-nav-link='1'>NavLink to A</NavLink>
    <NavLink to={'/b'} className='margin-right' data-nav-link='1'>NavLink to B</NavLink>
    <a href='/'>Link to A</a>
  </div>
)

export default Nav
