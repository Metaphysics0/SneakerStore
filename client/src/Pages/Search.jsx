import React, { useState } from 'react';
import Logo from '../img/logos/another-1.png';
import Data from './data.json';
import Data2 from './data2.json';
import ShoeCard from '../Components/ShoeCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dynamic Search
  const results = !searchTerm
    ? Data.shoes
    : Data.shoes.filter(
        (shoe) =>
          shoe.brand.toLowerCase().includes(searchTerm) ||
          shoe.name.toLowerCase().includes(searchTerm) ||
          shoe.brand.includes(searchTerm) ||
          shoe.name.includes(searchTerm)
      );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search">
        <img className="search__logo mb-3" src={Logo} alt="logo" />
        <input
          className="search__input mb-2"
          type="text"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <h3 className="heading__impact mb-3 clamp-1">Recent listings</h3>
      <div className="shoe mb-4">
        {results.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
      <div className="heading__impact mb-3 clamp-1">Featured Products</div>
      <div className="shoe">
        {Data2.shoes.map((shoe) => (
          <ShoeCard shoe={shoe} />
        ))}
      </div>
    </>
  );
};

export default Search;
