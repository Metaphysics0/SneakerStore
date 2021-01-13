import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className="search">
      <h2 className="heading__primary mb-1">SEARCH PAGE!</h2>
      <div>
        <input
          className="search__input mb-2"
          type="text"
          name="search"
          placeholder="Yeezy Red October 2019"
        />
        <button className="button button--search">
          Search <AiOutlineSearch />
        </button>
      </div>
      <Link to="/">
        <button className="button">Return</button>
      </Link>
    </div>
  );
};

export default Search;
