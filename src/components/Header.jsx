import React from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

const Header = () => {

  const actLink = ({ isActive }) => isActive ? 'link active' : 'link'
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen);

  const isClose = () => {
    setOpen(!isOpen)
  }


  return (
    <header className='header'>
      <div className="container">
        <ul className={isOpen ? 'header-nav open' : 'header-nav'}>
          <li><NavLink onClick={isClose} to='/' className={actLink}>Головна</NavLink></li>
          <li><NavLink onClick={isClose} to='menu' className={actLink}>Меню</NavLink></li>
          <li className='header-logo'>GG</li>
          <li><NavLink onClick={isClose} to='about' className={actLink}>Про нас</NavLink></li>
          <li><NavLink onClick={isClose} to='contacts' className={actLink}>Контакти</NavLink></li>
        </ul>
        <div className="mob-nav">
          <div className="mob-wrapper">
            <div className="mob-logo">Golden Geese</div>
            <div onClick={() => setOpen(!isOpen)}>
              <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
