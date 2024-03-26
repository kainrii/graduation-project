import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='navbar-menu'>
        <li className='navbar-menu-item'>
            <Link>For Companies</Link>
            {/* <a href="#"> For Companies</a> */}
        </li>
        <li className='navbar-menu-item'>
            <Link>For Talents</Link>
            {/* <a href="#">For Talents</a> */}
        </li>
        <li className='navbar-menu-item'>
            <Link>Jobs</Link>
            {/* <a href="#">Jobs</a> */}
        </li>
        <li className='navbar-menu-item'>
            <Link>Contacts</Link>
            {/* <a href="#">Contacts</a> */}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
