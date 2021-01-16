import React from 'react';
import Marquee from '../Components/Marquee';

import Logo from '../img/logos/BLACK.gif';

const Home = ({ setProfile }) => {
  return (
    <>
      <Marquee />
      <div className="home">
        <img className="home__logo" src={Logo} alt="Logo" />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'http://localhost:3000/login';
          }}
        >
          Enter
        </button>
      </div>
      <h3 className="home__quote">
        Would you believe in what you believe in if you were the only one who believed it?
        <br /> - Kanye West
      </h3>
    </>
  );
};

export default Home;
