import React, {useState} from 'react';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import Logo from '../img/logos/another-1.png';

const SNEAKER_URL= `https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=`;

const Settings = (e) => {
  const [sneakers, setSneakers] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  //on chage of searching make a fetch request to the api , and render the results 
  //make a function which calls the api 

  const getSneakers = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=20&brand=${searchVal}`);
      // const data = await response.json();
      await axios.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${e.target.value}`)
      .then(res => setSneakers(res.data));
      // console.log(data);
      // return (data);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div>
      <div className="search">
        <input onChange={getSneakers} className="search__input mb-2" type="text" name="search" placeholder="Search..." />
        <div className="heading__impact mb-3">Select a product</div>
      </div>

      {sneakers.results ? (
          sneakers.results.map((item) => (
            <div className="shoe" >
              <div className="shoe__content" key={item.id}>
                <img className="shoe__img mb-2" src={item.media.smallImageUrl} alt="shoe" />
                <div className="bg-grey">
                  <p className="shoe__title mb-1">
                    {item.brand} {item.name} <br /> ({item.year})
                  </p>
                  <p className="shoe__price">
                    Retail Price: &nbsp;<span>${item.retailPrice}</span>
                  </p>
                  {/* <p className="shoe__sellar">
                    Seller: {shoe.sellar}&nbsp;{rating(shoe.sellarRating)}
                  </p> */}
                  <p className="shoe__views mb-1">Views: {"shoe.views"}</p>
                  <p className="shoe__date">Date Listed: {"shoe.dateListed"}</p>
                  <div className="space-between clamp-1">
                    <Link to="/product/123">
                      <button className="shoe__btn">View</button>
                    </Link>
                    <FaRegHeart className="shoe__icon" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Spinner animation="grow" />
        )}
    </div>
  );
};

export default Settings;


