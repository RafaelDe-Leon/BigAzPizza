import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from '../Logo';
import Nav from 'react-bootstrap/Nav';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className='navbar navbar-expand-lg navbar-light bg-light '>
          <Nav.Link href='/' className='nav-link nameText'>
            <Logo />
          </Nav.Link>
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
              <Nav.Item>
                <Nav.Link href='/menu' className='navBtn1'>
                  Menu
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='/specials' className='navBtn2'>
                  Specials
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/contactus' className='navBtn3'>
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </ul>
          </div>
        </Nav>
      </div>
    );
  }
}
