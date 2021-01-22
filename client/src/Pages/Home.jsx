import React, { useState } from 'react';
import Marquee from '../Components/Marquee';
import SignUpModal from '../Components/Modals/SignUpModal';
import Logo from '../img/logos/BLACK.gif';

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }
  return (
    <>
      {/* <Marquee /> */}
      <div className="home">
        <img className="home__logo" src={Logo} alt="Logo" />
        <button className="button" onClick={toggleModal}>
          Enter
        </button>
      </div>
      <h3 className="home__quote">
        Would you believe in what you believe in if you were the only one who believed it?
        <br /> - Kanye West
      </h3>
      <SignUpModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Home;
