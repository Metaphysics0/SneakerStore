import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Marquee from '../Components/Marquee';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Search from '../Pages/Search';
import Settings from '../Pages/Settings';
import MySneakers from '../Pages/MySneakers';
import Navbar from '../Components/Navbar';

const Main = () => {
  return (
    <Router>
      <Marquee />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Navbar />
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
        <Route path="/settings">
          <Navbar />
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
