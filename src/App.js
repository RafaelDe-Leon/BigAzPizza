import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MenuPG from './Pages/Menu';
import ContactUsPG from './Pages/ContactUs';
import LocationPG from './Pages/Location';

import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Redirect
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <header>
        <div className='main-heading'>
          <div className='row heading-padding'>
            <div className='col-md-3'></div>
            <div className='col-md-6 mt-5'>
              <h1 className='heading-title'>Margarita Pizza</h1>
              <p className='heading-p'>Taste the greatness</p>
            </div>
            <div className='col-md-3'></div>
          </div>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <button className='main-button heading-button'>
                <span>Order Now </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className='wrapper mt-5'>
        <section className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='row'>
                <img
                  src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
                  alt='veggie'
                  className='img-test'
                />
              </div>
              <div className='row mt-3'>
                <h3>Lorem ipsum</h3>
              </div>
              <div className='row'>
                <button className='main-button'>
                  <span>Order Now </span>
                </button>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='row'>
                <img
                  src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
                  alt='veggie'
                  className='img-test'
                />
              </div>
              <div className='row mt-3'>
                <h3>Lorem ipsum</h3>
              </div>
              <div className='row'>
                <button className='main-button'>
                  <span>Order Now </span>
                </button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='row'>
                <img
                  src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80'
                  alt='veggie'
                  className='img-test'
                />
              </div>
              <div className='row mt-3'>
                <h3>Lorem ipsum</h3>
              </div>
              <div className='row'>
                <button className='main-button'>
                  <span>Order Now </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <Route exact path='/' component={Home} />
      <Route exact path='/location' component={LocationPG} />
      <Route exact path='/menu' component={MenuPG} />
      <Route exact path='/contactus' component={ContactUsPG} />
    </div>
  );
}

export default App;
