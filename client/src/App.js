import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import history from './history';

import Navigation from './components/Navigation';
import Home from './components/Home';
import EventsList from './components/EventsList';
import EventDetails from './components/EventDetails';

import './App.css';

const auth = new Auth();



class App extends Component {
  
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Navigation />
          <Route path='/home' exact component={Home} />
          <Route path='/events' component={EventsList} />
          <Route path='/:id/eventDetails' component={EventDetails} />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
