import React, {useState, useEffect} from 'react';
import { useAuth } from '../../context/AuthContext';
import { getUserById, changeProfile } from '../../lib/api';
// import { set } from 'mongoose';

const ProfileLeft = () => {
  const [userData, setData] = useState({});
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  // const [id, setId] = useState('');
  const { auth } = useAuth();
  
  useEffect(() => {
    async function fetchData() {
      const userDataResponse =  await getUserById(auth.userId)
      setData(userDataResponse);
    }
    fetchData();
  }, [auth.userId]); 

  // example below of the info you can access 
  // From mongo we need to send back the recent reviews and the image on the db for this panel
  console.log("got here "+ userData.email) 

  const handleImageChange = async (e) => {
    setFile(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]));
    const data = new FormData();
    data.append('file', file);
    data.append('email', userData.email);
    changeProfile(data);
  }


  return (
    <section className="profile__left">
      <label className="label-center">
        <img  className="profile__img" src={!file ? userData.profilePicture : fileUrl} alt="img" />
        <input type="file" name="photo" id="photo" style={{ display: 'none' }}  onChange={handleImageChange}/>
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
