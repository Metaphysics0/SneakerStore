import React from 'react';
import ProfileLeft from './Profile/ProfileLeft';
import ProfileTop from './Profile/ProfileTop';
import ProfileBottom from './Profile/ProfileBottom';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <ProfileLeft user={user} />
      <ProfileTop user={user} />
      <ProfileBottom user={user} />
    </div>
  );
};

export default Profile;
