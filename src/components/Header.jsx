import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li className='logo'>WeBarelyWork</li>
          <li>
            <img src='images/pin.png' className='icon' alt='location' />
          </li>
          <li className='align-right'>
            <img src='images/burger.png' className='icon' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
