import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import SignInModal from '../Components/Modals/SignInModal';
import Logo from '../img/logos/BLACK.gif';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  const { auth } = useAuth();

  return (
    <>
      <div className="home">
        <img className="home__logo" src={Logo} alt="Logo" />
        <div className="btn-wrap">
          <button className="button button--calm">
            <BsSearch />
          </button>
          <button className="button" onClick={toggleModal}>
            {auth ? 'Enter' : 'Sign In'}
          </button>
          <span className="home__link">
            New? <Link to="/signup">Create an account</Link>
          </span>
        </div>
      </div>
      <h3 className="home__quote">
        Would you believe in what you believe in if you were the only one who believed it?
        <br /> - Kanye West
      </h3>
      <SignInModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Home;
