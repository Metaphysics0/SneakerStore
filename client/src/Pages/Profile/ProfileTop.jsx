import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileTop = () => {
  const { logout } = useAuth0();
  return (
    <section className="profile__top">
      <div className="space-between">
        <h2 className="heading__impact-2 mb-2">Profile Page</h2>
        <button
          className="profile__logout"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
      <div className="flex-col-1">
        <h3 className="profile__name">Name: Ryan Roberts</h3>
        <h3 className="profile__rating">
          Rating: <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar /> (4.75)
        </h3>
        <h3 className="profile__sales">
          Total Sales: <span>3</span>
        </h3>
        <h3 className="profile__active">Member Since: 12/23/2020</h3>
      </div>
    </section>
  );
};

export default ProfileTop;
