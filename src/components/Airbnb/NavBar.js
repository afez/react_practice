import React from 'react'
import airbnb from '../../images/airbnb.png'

function NavBar() {
  return (
    <div>

        <nav className='nav-airbnb'>
            <img  src={airbnb}
            className="img-bnb"
            />
        </nav>
    </div>
  )
}

export default NavBar