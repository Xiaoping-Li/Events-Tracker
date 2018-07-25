import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from './Auth/Auth.js';
// import history from './history';
// import Callback from './Callback/Callback';
import Navigation from './components/Navigation';
import Home from './components/Home';
import EventsList from './components/EventsList';
import EventDetails from './components/EventDetails';

import './App.css';

const auth = new Auth();

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path='/' exact render={(props) => <Home auth={auth} {...props} />} />
          <Route path='/events' exact render={(props) => <EventsList auth={auth} {...props} />} />
          <Route path='/events/:id/eventDetails' component={EventDetails} />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
