import React, { useEffect , useState}from 'react';
import { getUserById } from '../lib/api';
import { useAuth } from '../context/AuthContext';

const MySneakers = () => {
  const [userData, setData] = useState({});
  const { auth } = useAuth();
  
  useEffect(() => {
    async function fetchData() {
      const userDataResponse =  await getUserById(auth.userId)
      setData(userDataResponse);
    }
    fetchData();
  }, [auth.userId]);

  //we can show listed sneakers here // maybe sold and purchased too

  return (
    <div className="my-sneakers">
      <h1 className="heading__impact">My Sneakers</h1>
    </div>
  );
};

export default MySneakers;
