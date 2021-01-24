import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
Modal.setAppElement('#root');

const SignUpModal = ({ toggleModal, modalIsOpen, modalInfo }) => {
  return (
    <Modal className="modal" isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <div className="modal__form modal__form--success">
        <h3 className="modal__heading modal__heading--success">Success!!</h3>
        <h4 className="modal__subheading">
          Here is your account. <br /> Log in with the following credentials:
        </h4>
        <ul className="modal__info">
          <li>Name: {modalInfo.name || ''}</li>
          <li>Email: {modalInfo.email || ''}</li>
          <li>Phone: {modalInfo.phone || ''}</li>
        </ul>
        <button className="button button--impact" type="submit">
          <Link to="/home">Return</Link>
        </button>
      </div>
      <div className="modal__right">
        <h3 className="right__heading">Thank you!</h3>
        <p className="right__text">You now have access to the following:</p>
        <ul className="right__list">
          <li>Ability to contact sellers directly</li>
          <li>Purchase sneakers with secure payment encryption</li>
          <li>Lifetime 24/7 customer support</li>
        </ul>
      </div>
    </Modal>
  );
};

export default SignUpModal;
