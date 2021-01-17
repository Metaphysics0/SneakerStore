import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Marquee from '../Components/Marquee';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Search from '../Pages/Search';
import Sell from '../Pages/Sell';
import MySneakers from '../Pages/MySneakers';
import Navbar from '../Components/Navbar';
import SneakerPage from '../Pages/SneakerPage';
import NavbarMin from '../Components/NavbarMin';
import { useAuth0 } from '@auth0/auth0-react';

const Main = () => {
  // we will pass the 'user' object as a prop throughout the app
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading!!!</h1>;
  }

  return (
    <Router>
      {console.log('USER: ', user)}
      <Marquee />
      <Switch>
        <Route exact path="/">
          <NavbarMin />
          <Search />
        </Route>
        <Route path="/profile">
          <Navbar />
          <Profile />
        </Route>
        <Route path="/mysneakers">
          <Navbar />
          <MySneakers />
        </Route>
        <Route path="/sell">
          <Navbar />
          <Sell />
        </Route>
        <Route path="/product/:id">
          <Navbar />
          <SneakerPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
