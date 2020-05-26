import React from 'react';
import './specials.css';
import { Link } from 'react-router-dom';

export default function SpecialsPG() {
  return (
    <div>
      {/* First container with Large IMG (full pg) */}
      <div className='container-fluid centerPage'>
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
                <span>Add & Customize</span>
              </button>
            </div>
          </div>
        </div>

        {/* Second container with products */}
        <div className='container-fluid secondSpecialCon'>
          <div className='row'>
            {/* First main product col */}
            <div className='col-lg-6'>
              <div className='row productContainer'>
                {/* Img col */}
                <div className='col-lg-6 specialProductsIMG2'></div>
                <div className='col-lg-6 container2-col1 '>
                  <div className=' row'>
                    <p className='col-md-8 container2-Text1'>Pizza & Wings</p>{' '}
                    <p className='col-md-4 container2-Text1-col2'>$20.00</p>
                  </div>
                  <div className='container2-Text2'>
                    Enjoy your favorite 2-toppings on our large/thin crust pizza
                    & add a 6 piece order of wings!
                  </div>
                  <button className='main-button container2-Text3  '>
                    <span>Add & Customize</span>
                  </button>
                </div>
              </div>

              <div className='row productContainer'>
                {/* Img col */}
                <div className='col-lg-6 specialProductsIMG3'></div>
                <div className='col-lg-6 container2-col1 '>
                  <div className=' row'>
                    <p className='col-md-8 container2-Text1'>
                      Two Medium 2-Toppings
                    </p>{' '}
                    <p className='col-md-4 container2-Text1-col2'>$15.00</p>
                  </div>
                  <div className='container2-Text2'>
                    Two pizzas are better than one – especially at this price
                  </div>
                  <button className='main-button container2-Text3  '>
                    <span>Add & Customize</span>
                  </button>
                </div>
              </div>

              <div className='row productContainer'>
                {/* Img col */}
                <div className='col-lg-6 specialProductsIMG4'></div>
                <div className='col-lg-6 container2-col1 '>
                  <div className=' row'>
                    <p className='col-md-8 container2-Text1'>2-2-2 Deal</p>{' '}
                    <p className='col-md-4 container2-Text1-col2'>$22.00</p>
                  </div>
                  <div className='container2-Text2'>
                    Enjoy 2 Large pizzas with your choice of 2 toppings & a
                    2-Liter!
                  </div>
                  <button className='main-button container2-Text3  '>
                    <span>Add & Customize</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Second main product col */}
            <div className='col-lg-6'>
              <div className='row productContainer'>
                {/* Img col */}
                <div className='col-lg-6 specialProductsIMG5'></div>
                <div className='col-lg-6 container2-col1 '>
                  <div className=' row'>
                    <p className='col-md-8 container2-Text1'>Picks for $6</p>{' '}
                    <p className='col-md-4 container2-Text1-col2'>$6.00</p>
                  </div>
                  <div className='container2-Text2'>
                    1-Topping Medium Pizza? Wings and Garlic Knots? Pick two or
                    more, just $6 each
                  </div>
                  <button className='main-button container2-Text3  '>
                    <span>Add & Customize</span>
                  </button>
                </div>
              </div>

              <div className='row productContainer'>
                {/* Img col */}
                <div className='col-lg-6 specialProductsIMG6'></div>
                <div className='col-lg-6 container2-col1 '>
                  <div className=' row'>
                    <p className='col-md-8 container2-Text1'>
                      Two Large 1-Topping Pizzas
                    </p>{' '}
                    <p className='col-md-4 container2-Text1-col2'>$15.00</p>
                  </div>
                  <div className='container2-Text2'>
                    Two Large 1-Topping Pizzas. Imagine that!
                  </div>
                  <button className='main-button container2-Text3  '>
                    <span>Add & Customize</span>
                  </button>
                </div>
              </div>

              <div className='row productContainer'>
                {/* Img col */}
                <div className='col-lg-6 specialProductsIMG7'></div>
                <div className='col-lg-6 container2-col1 '>
                  <div className=' row'>
                    <p className='col-md-8 container2-Text1'>Any Side</p>{' '}
                    <p className='col-md-4 container2-Text1-col2'>$6.00</p>
                  </div>
                  <div className='container2-Text2'>
                    Any Side (10" Cheesesticks, Breadsticks, and more!)
                  </div>
                  <button className='main-button container2-Text3  '>
                    <span>Add & Customize</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
