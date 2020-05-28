import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <div className='container centerPage'>
        <h1 className='menuMainText'>BigAzPizza's Menu</h1>
        <p className='menuMainText2'>
          Our menu has your favorites, our favorites, honestly, everyone's
          favorites
        </p>
        <div className='container '>
          <Link to='./pizzamenu' className='menuBTN row'>
            <div className='col-md-2 pizzaMenuIMG'></div>
            <div className='menuItembtn col-md-10'>Pizza</div>
          </Link>
        </div>
        <div className='container '>
          <Link to='./pastamenu' className='menuBTN row'>
            <div className='col-md-2 pastaMenuIMG'></div>
            <div className='menuItembtn col-md-10'>Pasta</div>
          </Link>
        </div>
        <div className='container '>
          <Link to='./saladmenu' className='menuBTN row'>
            <div className='col-md-2 saladMenuIMG'></div>
            <div className='menuItembtn col-md-10'>Salad</div>
          </Link>
        </div>
        <div className='container '>
          <Link to='./dominicanmenu' className='menuBTN row'>
            <div className='col-md-2 dominicanMenuIMG'></div>
            <div className='menuItembtn col-md-10'>Dominican</div>
          </Link>
        </div>
        <div className='container '>
          <Link to='./dessertmenu' className='menuBTN row'>
            <div className='col-md-2 dessertMenuIMG'></div>
            <div className='menuItembtn col-md-10'>Dessert</div>
          </Link>
        </div>
        <div className='container '>
          <Link to='./sidesmenu' className='menuBTN row'>
            <div className='col-md-2 sidesMenuIMG'></div>
            <div className='menuItembtn col-md-10'>Sides</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
