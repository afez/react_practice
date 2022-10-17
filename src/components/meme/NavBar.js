import React from 'react'
import logo from '../../images/memelogo.png'

const NavBar = () =>{
  return (
    <nav className='memeNav'>
<img  src={logo} className="memeLogo"/>
<h1>Meme Generator</h1>
<h4>
React Course - Project 3
</h4>
    </nav>
  )
}

export default NavBar