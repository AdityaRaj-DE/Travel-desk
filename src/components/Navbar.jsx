import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='m-2 text-lime-500'>
      <NavLink className='p-2 text-lime-500 text-3xl' to="/">TravelDesk</NavLink>
      <NavLink className='p-2 text-lime-500' to="/about">About</NavLink>
      <NavLink className='p-2 text-lime-500' to="/redeem">Redeem</NavLink>
    </div>
  )
}

export default Navbar
