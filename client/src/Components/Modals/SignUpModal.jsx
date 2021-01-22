import React from 'react';
import Modal from 'react-modal';
import { FaKey, FaUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const SignUpModal = ({ toggleModal, modalIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => alert(JSON.stringify(data));

  return (
    <Modal className="modal" isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal__heading">Sign Up</h3>
        <div className="input-wrap">
          <FaUser className="input-wrap__icon" />
          <input
            ref={register}
            className="input-wrap__input"
            type="text"
            name="email"
            placeholder="Name"
          />
        </div>
        <div className="input-wrap">
          <FaKey className="input-wrap__icon" />
          <input
            className="input-wrap__input"
            type="password"
            ref={register}
            name="password"
            placeholder="Password"
          />
        </div>
        <button className="button button--impact" type="submit">
          Log In!
        </button>
      </form>
      <div className="modal__right">
        <h3 className="right__heading">Welcome Back</h3>
        <p className="right__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi.
        </p>
      </div>
    </Modal>
  );
};

export default SignUpModal;
