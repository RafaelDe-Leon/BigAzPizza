import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <h1 className='menuMainText'>BigAzPizza's Menu</h1>
        </div>
        <div className='row'>
          <p className='menuMainText2'>
            Our menu has your favorites, our favorites, honestly, everyone's
            favorites
          </p>
        </div>
        <div className='row '>
          <Link to='./pizzamenu' className='menuBTN '>
            <div className='row'>
              <div className='col-md-2 pizzaMenuIMG'></div>
              <div className='menuItembtn col-md-10'>Pizza</div>
            </div>
          </Link>
        </div>
        <div className='row '>
          <Link to='./pastamenu' className='menuBTN '>
            <div className='row'>
              <div className='col-md-2 pastaMenuIMG'></div>
              <div className='menuItembtn col-md-10'>Pasta</div>
            </div>
          </Link>
        </div>
        <div className='row '>
          <Link to='./saladmenu' className='menuBTN '>
            <div className='row'>
              <div className='col-md-2 saladMenuIMG'></div>
              <div className='menuItembtn col-md-10'>Salad</div>
            </div>
          </Link>
        </div>
        <div className='row '>
          <Link to='./dominicanmenu' className='menuBTN'>
            <div className='row'>
              <div className='col-md-2 dominicanMenuIMG'></div>
              <div className='menuItembtn col-md-10'>Dominican</div>
            </div>
          </Link>
        </div>
        <div className='row '>
          <Link to='./dessertmenu' className='menuBTN'>
            <div className='row'>
              <div className='col-md-2 dessertMenuIMG'></div>
              <div className='menuItembtn col-md-10'>Dessert</div>
            </div>
          </Link>
        </div>
        <div className='row '>
          <Link to='./sidesmenu' className='menuBTN'>
            <div className='row'>
              <div className='col-md-2 sidesMenuIMG'></div>
              <div className='menuItembtn col-md-10'>Sides</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
