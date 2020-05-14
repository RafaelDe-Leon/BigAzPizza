import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from '../Logo';

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   document.getElementById('mySidebar').style.width = '250px';
//   document.getElementById('main').style.marginLeft = '250px';
// }

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById('mySidebar').style.width = '0';
//   document.getElementById('main').style.marginLeft = '0';
// }

export default function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light '>
      <Link to='/' className='nav-link nameText'>
        <Logo />
      </Link>
      <button
        className='navbar-toggler navbutton'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse nav-bar-margin'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav mr-auto navBtns'>
          <li className='nav-item active'>
            <Link to='/menu' className='nav-link portfolioBTN'>
              Menu
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/location' className='nav-link portfolioBTN'>
              Location
            </Link>
          </li>

          <li className='nav-item'>
            <a href='/contactus' className='nav-link  portfolioBTN'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
