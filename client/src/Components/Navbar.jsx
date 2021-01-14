import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        Home
      </Link>
      <Link className="nav__link" to="/">
        Profile
      </Link>
      <Link className="nav__link" to="/">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
