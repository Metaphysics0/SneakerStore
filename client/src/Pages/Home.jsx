import React from 'react';
import Marquee from '../Components/Marquee';
import { Link } from 'react-router-dom';
import Logo from '../img/logos/RED-fit.gif';

const Home = () => {
  return (
    <>
      <Marquee />
      <div className="home">
        <img className="home__logo" src={Logo} alt="Logo" />
        <Link to="/search">
          <button className="button button--blue">Enter</button>
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
