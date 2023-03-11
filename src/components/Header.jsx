import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Link to='/' className='logo-img'>AV</Link>
          <Link to='/' className="logo-text">ASTROVUE</Link>
        </div>
        <nav className='header-nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;