import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

const signup = async (user) => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/signup', { user });
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
const login = async (user) => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/login', { user });
    // console.log(response.data)
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const logout = async () => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/logout');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(BASE_URL + `/api/users/${id}`);
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const changeProfile = async (object) => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/profilePicture', object)
    return response;
  } catch (err) {
    console.log(err);
  }
};

export { signup, login, logout, getUserById, changeProfile };
