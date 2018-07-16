import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Events from './components/Events';
import EventForm from './components/EventForm';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path='/' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/eventForm' component={EventForm} />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
