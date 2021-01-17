import './Sass/main.scss';
import Main from './Routes/Main';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Pages/Home';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Loading is required to fetch 'user' object
  if (isLoading) {
    console.log('USER: ', user);
    return <h1>Loading!!!</h1>;
  }

  // If user is signed in, display Main.
  // Otherwise, display the Home page
  return isAuthenticated ? <Main /> : <Home />;
}

export default App;
