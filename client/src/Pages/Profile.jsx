import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="profile__logout"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default Profile;
