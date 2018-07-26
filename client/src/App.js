import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import EventsList from './components/EventsList';
import EventDetails from './components/EventDetails';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path='/' exact component={Home} />
          <Route path='/events' exact component={EventsList} />
          <Route path='/events/:id/eventDetails' component={EventDetails} />
        </div>  
      </BrowserRouter>  
    );
  }
}

export default App;
