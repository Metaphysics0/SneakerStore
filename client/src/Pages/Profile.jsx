import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AiFillStar } from 'react-icons/ai';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Messages from './Profile/Messages';
import Settings from './Profile/Settings';
import Sales from './Profile/Sales';

const Profile = () => {
  const { logout } = useAuth0();
  let match = useRouteMatch();

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
        <div className="space-between">
          <h2 className="profile__heading mb-2">Profile</h2>
          <button
            className="profile__logout"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </div>
        <h3 className="profile__name mb-1">Name: Ryan Roberts</h3>
        <h3 className="profile__rating mb-1">
          Rating: <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />{' '}
        </h3>
        <h3 className="profile__active">Member Since: 12/23/2020</h3>
      </div>
      <section className="profile__bottom">
        <div className="flex mb-2">
          <NavLink
            to="/profile/sales"
            className="profile__navlink"
            activeClassName="profile__navlink profile__navlink--active"
          >
            Sales
          </NavLink>
          <NavLink
            to="/profile/messages"
            className="profile__navlink"
            activeClassName="profile__navlink profile__navlink--active"
          >
            Messages
          </NavLink>
          <NavLink
            to="/profile/settings"
            className="profile__navlink"
            activeClassName="profile__navlink profile__navlink--active"
          >
            Settings
          </NavLink>
        </div>
        <Switch>
          <Route path="/profile/sales">
            <Sales />
          </Route>
          <Route path="/profile/messages">
            <Messages />
          </Route>
          <Route path="/profile/settings">
            <Settings />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Profile;
