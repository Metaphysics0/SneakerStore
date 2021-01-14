import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import Logo from '../img/logos/another-1.png';
import Navbar from '../Components/Navbar';

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="search">
        <img className="search__logo mb-3" src={Logo} alt="logo" />
        <div>
          <GoSearch />
          <input className="search__input mb-2" type="text" name="search" placeholder="Search..." />
        </div>
      </div>
    </>
  );
};

export default Search;
