import React from 'react'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div>
            <header className='logo'>
                <img src={logo} alt='' />
            </header>
            <hr />
        </div>

    )
}

export default Header