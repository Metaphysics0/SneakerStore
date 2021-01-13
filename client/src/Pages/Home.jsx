import React from 'react';
import Marquee from '../Components/Marquee';
import { Link } from 'react-router-dom';
import Logo from '../img/logos/RED-fit.gif';

const Home = () => {
  return (
    <>
      <Marquee />
      <div className="home">
        {/* <h1 className="heading__primary mb-1">SNEAKERSTORE</h1> */}
        <img className="home__logo" src={Logo} alt="Logo" />
        <Link to="/search">
          <button className="button button--blue">Enter</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
