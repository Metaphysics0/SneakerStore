import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AiFillStar } from 'react-icons/ai';

const Profile = () => {
  const { logout } = useAuth0();

  return (
    <div className="profile">
      <div className="profile__left">
        <img src="https://i.stack.imgur.com/34AD2.jpg" alt="img" className="profile__img" />
        <label>
          Change profile photo!
          <input type="file" name="photo" id="photo" />
        </label>
        <h3 className="profile__subheading">Recent Reviews:</h3>
        <p className="profile__review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, distinctio?
        </p>
      </div>
      <div className="profile__top">
        <h2 className="profile__heading">Ryan Roberts</h2>
        <h3 className="profile__rating">
          Rating: <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />{' '}
        </h3>
        <button
          className="profile__logout"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
      <section className="profile__bottom">
        <div className="flex">
          <h3 className="profile__rating">Sales</h3>
          <h3 className="profile__rating">Profile Info</h3>
          <h3 className="profile__rating">Messages</h3>
        </div>
      </section>
    </div>
  );
};

export default Profile;
