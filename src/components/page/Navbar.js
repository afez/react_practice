/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../../logo.svg'

function Navbar() {
  return (
    <div>
        <nav className='nav-page'>
            <img 
            src={logo} className='nav-img'
            />
            <h3> React course</h3>
            <h4>Learn React from here-- Part 1</h4>
        </nav>
    </div>
  )
}

export default Navbar