import React from 'react';
import './specials.css';
import { Link } from 'react-router-dom';

export default function SpecialsPG() {
  return (
    <div>
      {/* First container with Large IMG (full pg) */}
      <div className='container-fluid'>
        <div className='container-fluid firstSpecialCon'>
          <h1 className='specialsTEXT'>Specials</h1>
          <div className='row firstSpecialRow'>
            <div className='col-lg-6 mainSpecialIMG'></div>
            <div className='col-lg-6 container1-col1 '>
              <div className=' row'>
                <p className='col-md-8 container1-Text1'>Any Large Pizza</p>{' '}
                <p className='col-md-4 container1-Text1-col2'>$10.00</p>
              </div>
              <div className='container1-Text2'>
                Choose any Large Pizza or up to 5 toppings!
              </div>
              <button className='main-button container1-Text3  '>
                <span>Customize</span>
              </button>
            </div>
          </div>
        </div>

        {/* Second container with products */}
        <div className='container'>
          <div className='row'>
            {/* First main product col */}
            <div className='col-lg-6'>
              <div className='row'>
                {/* Img col */}
                <div className='col-md-6'>IMG</div>
                <div className='col-md-6'>ITEM TEXT</div>
              </div>

              <div className='row'>
                {/* Img col */}
                <div className='col-md-6'>IMG</div>
                <div className='col-md-6'>ITEM TEXT</div>
              </div>

              <div className='row'>
                {/* Img col */}
                <div className='col-md-6'>IMG</div>
                <div className='col-md-6'>ITEM TEXT</div>
              </div>
            </div>
            {/* Second main product col */}
            <div className='col-lg-6'>
              <div className='col-lg-6'>
                <div className='row'>
                  {/* Img col */}
                  <div className='col-md-6'>IMG</div>
                  <div className='col-md-6'>ITEM TEXT</div>
                </div>

                <div className='row'>
                  {/* Img col */}
                  <div className='col-md-6'>IMG</div>
                  <div className='col-md-6'>ITEM TEXT</div>
                </div>

                <div className='row'>
                  {/* Img col */}
                  <div className='col-md-6'>IMG</div>
                  <div className='col-md-6'>ITEM TEXT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
