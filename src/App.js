import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MenuPG from './Pages/Menu';
import ContactUsPG from './Pages/ContactUs';
import LocationPG from './Pages/Location';

import {
  BrowserRouter as Router,
  Route
  // Switch,
  // Redirect
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />

      <Router exact path='/' component={Home} />
      <Router exact path='/location' component={LocationPG} />
      <Router exact path='/menu' component={MenuPG} />
      <Router exact path='/contactus' component={ContactUsPG} />
      <Footer />
    </div>
  );
}

export default App;
