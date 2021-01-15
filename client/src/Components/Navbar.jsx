import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/search">
        Search
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/mysneakers">
        My Sneakers
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/profile">
        Profile
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/settings">
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
