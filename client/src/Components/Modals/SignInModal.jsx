import React, { useState } from 'react';
import Modal from 'react-modal';

import { FaKey, FaUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useHistory , BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { login } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';
// import SignUp from '../../Pages/SignIn';
import SignUpForm from '../SignUpForm';
import { BsLayoutThreeColumns } from 'react-icons/bs';
Modal.setAppElement('#root');

const SignInModal = ({ toggleModal, modalIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const [ signUpForm, setSignUpForm ] = useState(false);

  const history = useHistory();
  const { dispatch } = useAuth();

  const onSubmit = async (data) => {
    const response = await login(data);
    if (!response.error) {
      dispatch({
        type: 'LOGIN',
        payload: response,
      });
      history.push('/');
    } else {
      console.log(response.error);
    }
  };

  //State will be 
  //import SignUp , add on Click inside of SignIn , changing a state 
  //Set singupUpOpen ? signIN : signUp 


  return (
    <Modal className="modal" isOpen={modalIsOpen} onRequestClose={toggleModal}>
      {signUpForm ? <SignUpForm closeSignUp={(value)=> setSignUpForm(value)}/> : <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal__heading">Sign In</h3>
        <div className="input-wrap">
          <FaUser className="input-wrap__icon" />
          <input
            ref={register}
            className="input-wrap__input"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="input-wrap">
          <FaKey className="input-wrap__icon" />
          <input
            className="input-wrap__input "
            type="password"
            ref={register}
            name="password"
            placeholder="Password"
          />
        </div>
        <button className="button button--impact" type="submit">
          Log In!
        </button>
        <div className="modal__sign-up">
          <p className="modal__bottom-text">

          <button  className="button button--impact" onClick={()=> setSignUpForm(true)}>
               Close Login
          </button>
            {/* <Link to="/signup">Create Account</Link> */}
          </p>
        </div>
      </form>}
      {/* <div className="modal__right">
        <h3 className="right__heading">Welcome Back</h3>
        <p className="right__text">Signed up users gain access to the following:</p>
        <ul className="right__list">
          <li>Ability to contact sellers directly</li>
          <li>Purchase sneakers with secure payment encryption</li>
          <li>Lifetime 24/7 customer support</li>
        </ul>
      </div> */}
    </Modal>
  );
};

export default SignInModal;
