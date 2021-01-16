import './Sass/main.scss';
import Main from './Routes/Main';
import { useEffect, useState } from 'react';
import Home from './Pages/Home';

function App() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch('http:/localhost:3000/api/profile');
        const data = await response.json();
        console.log('PROFILE: ', data);
        return data;
      } catch (e) {
        console.error(e);
      }
    };
    getProfile();
  }, []);

  return <>{profile ? <Main /> : <Home setProfile={setProfile} />}</>;
}

export default App;
