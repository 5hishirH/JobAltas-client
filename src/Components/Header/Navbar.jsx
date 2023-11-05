import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={'/'} className='btn btn-neutral'>Home</Link>
      <Link to={'/login'} className='btn btn-neutral'>Login</Link>
    </div>
  )
}

export default Navbar