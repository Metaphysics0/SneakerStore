import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logos/BLACK.gif';

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="home__logo" src={Logo} alt="Logo" />
        <Link to="/search">
          <button className="button">Enter</button>
        </Link>
      </div>
      <h3 className="home__quote">
        Would you believe in what you believe in if you were the only one who believed it?
        <br /> - Kanye West
      </h3>
    </>
  );
};

export default Home;
