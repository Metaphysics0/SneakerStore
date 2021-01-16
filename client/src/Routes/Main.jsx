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

const Main = () => {
  return (
    <Router>
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
