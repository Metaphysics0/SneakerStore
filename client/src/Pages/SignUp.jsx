import React from 'react';
import { useForm } from 'react-hook-form';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { Si1Password } from 'react-icons/si';
import Logo from '../img/logos/another-1.png';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => alert(JSON.stringify(data));

  return (
    <div className="home home--white">
      <img src={Logo} alt="logo" className="home__logo home__logo--small" />
      <h3 className="home__heading">Create an account</h3>

      <div className="input-wrap">
        <CgProfile className="input-wrap__icon" />
        <input
          ref={register}
          className="input-wrap__input input-wrap__input--alt"
          type="text"
          name="name"
          placeholder="Full Name"
        />
      </div>
      <div className="input-wrap">
        <HiOutlineMail className="input-wrap__icon" />
        <input
          ref={register}
          className="input-wrap__input input-wrap__input--alt"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="input-wrap">
        <FiPhone className="input-wrap__icon" />
        <input
          ref={register}
          className="input-wrap__input input-wrap__input--alt"
          type="tel"
          name="phone"
          placeholder="Phone"
        />
      </div>
      <div className="input-wrap">
        <Si1Password className="input-wrap__icon" />
        <input
          ref={register}
          className="input-wrap__input input-wrap__input--alt"
          type="password"
          name="password"
          placeholder="Password (6 chars min.)"
        />
      </div>
      <div className="input-wrap">
        <HiOutlineKey className="input-wrap__icon" />
        <input
          ref={register}
          className="input-wrap__input input-wrap__input--alt"
          type="password"
          name="password_repeat"
          placeholder="Confirm Password"
        />
      </div>
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox" name="terms" />I agree to the terms and
        conditions
      </label>
      <button onClick={handleSubmit(onSubmit)} type="submit" className="button">
        Create Account
      </button>
    </div>
  );
};

export default SignUp;
