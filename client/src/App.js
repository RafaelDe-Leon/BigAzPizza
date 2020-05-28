import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import MenuPG from './Pages/Menu';
import PizzaMenu from './Pages/PizzaMenu';
import PastaMenu from './Pages/PastaMenu';
import SaladMenu from './Pages/SaladMenu';
import SidesMenu from './Pages/SidesMenu';
import DessertMenu from './Pages/DessertMenu';
import DominicanMenu from './Pages/DominicanMenu';
import ContactUsPG from './Pages/ContactUs';
import SpecialsPG from './Pages/Specials';

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

            <Route exact path='/pizzamenu' component={PizzaMenu} />
            <Route exact path='/pastamenu' component={PastaMenu} />
            <Route exact path='/saladmenu' component={SaladMenu} />
            <Route exact path='/sidesmenu' component={SidesMenu} />
            <Route exact path='/dessertmenu' component={DessertMenu} />
            <Route exact path='/dominicanmenu' component={DominicanMenu} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
