import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
  // Render star icons based on rating
  const star = () => <AiFillStar className="gold" />;
  const rating = (num) => [...Array(num)].map(star);

  return (
    <div key={shoe.id} className="shoe__content">
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
        <div className="space-between clamp-1">
          <Link to={`/product/${shoe.id}`}>
            <button className="shoe__btn">View</button>
          </Link>
          <FaRegHeart className="shoe__icon" />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
