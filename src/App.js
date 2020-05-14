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
    // <Router>
    <div className='App'>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/location' component={LocationPG} />
      <Route exact path='/menu' component={MenuPG} />
      <Route exact path='/contactus' component={ContactUsPG} />

      <Footer />
    </div>
    // </Router>
  );
}

export default App;
