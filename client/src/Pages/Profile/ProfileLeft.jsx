import React from 'react';

const ProfileLeft = () => {
  return (
    <section className="profile__left">
      <label className="label-center">
        <img className="profile__img" src="https://i.stack.imgur.com/34AD2.jpg" alt="img" />
        <input type="file" name="photo" id="photo" style={{ display: 'none' }} />
        <div className="overlay">
          <div className="overlay-text">Edit profile picture</div>
        </div>
      </label>
      <h3 className="profile__subheading">Recent Reviews:</h3>
      <p className="profile__review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, distinctio?
      </p>
    </section>
  );
};

export default ProfileLeft;
