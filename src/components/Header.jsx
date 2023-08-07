import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const actLink = ({isActive}) => isActive ? 'link active' : 'link'

  return (
    <header className='header'>
      <div className="container">
        <ul className='header-nav'>
          <li><NavLink to='/' className={actLink}>Головна</NavLink></li>
          <li><NavLink to='menu' className={actLink}>Меню</NavLink></li>
          <li className='header-logo'>GG</li>
          <li><NavLink to='about' className={actLink}>Про нас</NavLink></li>
          <li><NavLink to='contacts' className={actLink}>Контакти</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
