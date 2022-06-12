import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='nav-1' to='/'>Home</Link>
      <Link  className='nav-2' to='/contacts'>
          Contacts
      </Link>

    </div>
  )
}

export default Navbar