import React from 'react'

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo'>
                <h4 className='logo_up'>// Krushna</h4>
                <h4 className='logo_bottom'>Web_dev</h4>
            </div>

            <ul className='navs'>
                <li className='nav'>_home</li>
                <li className='nav'>_about</li>
                <li className='nav'>_portfolio</li>
                <li className='nav'>_services</li>
                <li className='nav'>_resume</li>
                <li className='nav'>_contact</li>
            </ul>
        </div>
    )
}

export default Header;
