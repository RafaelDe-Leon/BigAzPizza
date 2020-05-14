import React from 'react';
import logo from './BigAzPizza.png';
import './logo.css';

export default function Logo() {
  return (
    <div>
      <img src={logo} alt='logo' className='logo' />
    </div>
  );
}
