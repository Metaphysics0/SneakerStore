import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1 className="heading__primary mb-1">SNEAKERSTORE</h1>
      <Link to="/search">
        <button className="button">Enter</button>
      </Link>
    </>
  );
};

export default Home;
