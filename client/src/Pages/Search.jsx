import React from 'react';
import { shoe } from './mockData';
// import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Logo from '../img/logos/another-1.png';
import Navbar from '../Components/Navbar';

const Search = () => {
  const star = () => <AiFillStar className="gold" />;
  const rating = (num) => [...Array(num)].map(star);

  return (
    <>
      <Navbar />
      <div className="search">
        <img className="search__logo mb-3" src={Logo} alt="logo" />
        <input className="search__input mb-2" type="text" name="search" placeholder="Search..." />
        <div className="heading__impact mb-3">Featured Products</div>
      </div>

      <div className="shoe">
        <div className="shoe__content">
          <img className="shoe__img mb-2" src={shoe.img} alt="shoe" />
          <div className="bg-grey">
            <p className="shoe__title mb-1">
              {shoe.brand} {shoe.name} <br /> ({shoe.year})
            </p>
            <p className="shoe__price">
              Price: &nbsp;<span>${shoe.price}</span>
            </p>
            <p className="shoe__sellar">
              Seller: {shoe.sellar}&nbsp;{rating(shoe.sellarRating)}
            </p>
            <p className="shoe__views mb-1">Views: {shoe.views}</p>
            <p className="shoe__date">Date Listed: {shoe.dateListed}</p>
          </div>
        </div>

        <div className="shoe__content">
          <img
            className="shoe__img mb-2"
            src={shoe.img}
            alt="shoe"
            onLoad={() => <h3>Loading!!</h3>}
          />
          <div className="bg-grey">
            <p className="shoe__title mb-1">
              {shoe.brand} {shoe.name} <br /> ({shoe.year})
            </p>
            <p className="shoe__price">
              Price: &nbsp;<span>${shoe.price}</span>
            </p>
            <p className="shoe__sellar">
              Seller: {shoe.sellar}&nbsp;{rating(shoe.sellarRating)}
            </p>
            <p className="shoe__views mb-1">Views: {shoe.views}</p>
            <p className="shoe__date">Date Listed: {shoe.dateListed}</p>
          </div>
        </div>

        <div className="shoe__content">
          <img className="shoe__img mb-2" src={shoe.img} alt="shoe" />
          <div className="bg-grey">
            <p className="shoe__title mb-1">
              {shoe.brand} {shoe.name} <br /> ({shoe.year})
            </p>
            <p className="shoe__price">
              Price: &nbsp;<span>${shoe.price}</span>
            </p>
            <p className="shoe__sellar">
              Seller: {shoe.sellar}&nbsp;{rating(shoe.sellarRating)}
            </p>
            <p className="shoe__views mb-1">Views: {shoe.views}</p>
            <p className="shoe__date">Date Listed: {shoe.dateListed}</p>
          </div>
        </div>

        <div className="shoe__content">
          <img className="shoe__img mb-2" src={shoe.img} alt="shoe" />
          <div className="bg-grey">
            <p className="shoe__title mb-1">
              {shoe.brand} {shoe.name} <br /> ({shoe.year})
            </p>
            <p className="shoe__price">
              Price: &nbsp;<span>${shoe.price}</span>
            </p>
            <p className="shoe__sellar">
              Seller: {shoe.sellar}&nbsp;{rating(shoe.sellarRating)}
            </p>
            <p className="shoe__views mb-1">Views: {shoe.views}</p>
            <p className="shoe__date">Date Listed: {shoe.dateListed}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
