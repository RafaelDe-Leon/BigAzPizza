import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import MenuPG from '../Pages/Menu';
import ContactUsPG from '../Pages/ContactUs';
import SpecialsPG from '../Pages/Specials';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/specials' component={SpecialsPG} />
            <Route exact path='/menu' component={MenuPG} />
            <Route exact path='/contactus' component={ContactUsPG} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
