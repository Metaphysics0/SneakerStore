import React from 'react';

const ProfileLeft = ({ user }) => {
  return (
    <section className="profile__left">
      {console.log(user)}
      <label className="label-center">
        <img
          className="profile__img"
          src={user.picture || 'https://i.stack.imgur.com/34AD2.jpg'}
          alt="img"
        />
        <input type="file" name="photo" id="photo" style={{ display: 'none' }} />
        <div className="overlay">
          <div className="overlay-text">Edit profile picture</div>
        </div>
      </label>
      <h3 className="profile__subheading mb-2">Recent Reviews</h3>
      <div className="review">
        <h3 className="review__author">Giorgia Borgmann: </h3>
        <p className="review__review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, distinctio!! 🔥
        </p>
        <p className="review__sign">- Product: Nike Air Max (12/23/2020) </p>
      </div>
      <div className="review">
        <h3 className="review__author">Lev Danneman: </h3>
        <p className="review__review">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio error ipsa ducimus iusto
          dolores quibusdam. 🤙🏻
        </p>
        <p className="review__sign">- Product: Yeezy Red October (12/23/2021) </p>
      </div>
    </section>
  );
};

export default ProfileLeft;
