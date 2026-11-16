import { Link, NavLink } from 'react-router';

const Header = () => {

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Link to='/'>AstroVue</Link>
        </div>
        <nav>
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
