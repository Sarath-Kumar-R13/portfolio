
import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { links } from '../pages/data';
import './Navbar.css';
import { links } from '../data';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  const [darkTheme, setDarkTheme] = useState(() => {
    
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.body.className = darkTheme ? 'dark-theme' : 'light-theme'
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])


  return (
    <nav className={`nav ${darkTheme ? 'nav_dark' : ''}`}>
      <div className={`${showMenu ? 'nav_menu show_menu' : 'nav_menu'}`}>
        <ul className='nav_list'>
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className='nav_item' key={index}>
                <NavLink to={path} className={({ isActive }) =>
                  isActive ? 'nav_link active_nav' : 'nav_link'
                }
                >
                  {icon}
                  <h3 className='nav_name'>{name}</h3>
                </NavLink>
              </li>
          )
          })}
        </ul>
      </div>

      <div className={`${showMenu ? 'nav_toggle animate_toggle' : 'nav_toggle'}`}
        onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button
          className='theme_toggle_top'
          onClick={() => setDarkTheme(prev => !prev)}
        >
          {darkTheme ? '☀️ ' : '🌙 '}
        </button>
    </nav>
  )
}

export default Navbar