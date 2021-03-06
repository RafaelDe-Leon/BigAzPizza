import React, { Component } from 'react';
import './pastamenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          {/* First set -4- of cards */}
          <div className='container-fluid centerPage '>
            <section className='section-Menu'>
              <h1 className='menuMainText'>BigAz's picks</h1>
              <div className='row'>
                <div className='col-lg-3'>
                  {/* Card Menu 1 */}
                  <div className='card cardStyle '>
                    <div class='card-img-top PastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>

                <div className='col-lg-3'>
                  {/* Card Menu 2*/}
                  <div className='card cardStyle '>
                    <div class='card-img-top PastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
                <div className='col-lg-3'>
                  {/* Card Menu 3*/}
                  <div className='card cardStyle '>
                    <div class='card-img-top PastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
                <div className='col-lg-3'>
                  {/* Card Menu 4 */}
                  <div className='card cardStyle '>
                    <div class='card-img-top PastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
              </div>
            </section>

            {/* Second set -4- of cards */}
            <section className='section-Menu'>
              <h1 className='menuMainText'>Handcrafted Specialties</h1>
              <div className='row'>
                <div className='col-lg-3'>
                  {/* Card Menu 1 */}
                  <div className='card cardStyle '>
                    <div class='card-img-top hsPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>

                <div className='col-lg-3'>
                  {/* Card Menu 2*/}
                  <div className='card cardStyle '>
                    <div class='card-img-top hsPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
                <div className='col-lg-3'>
                  {/* Card Menu 3*/}
                  <div className='card cardStyle '>
                    <div class='card-img-top hsPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
                <div className='col-lg-3'>
                  {/* Card Menu 4 */}
                  <div className='card cardStyle '>
                    <div class='card-img-top hsPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
              </div>
            </section>

            {/* Third set -4- of cards */}
            <section className='section-Menu'>
              <h1 className='menuMainText'>New York's Favorites</h1>
              <div className='row'>
                <div className='col-lg-3'>
                  {/* Card Menu 1 */}
                  <div className='card cardStyle '>
                    <div class='card-img-top NYPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>

                <div className='col-lg-3'>
                  {/* Card Menu 2*/}
                  <div className='card cardStyle '>
                    <div class='card-img-top NYPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
                <div className='col-lg-3'>
                  {/* Card Menu 3*/}
                  <div className='card cardStyle '>
                    <div class='card-img-top NYPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
                <div className='col-lg-3'>
                  {/* Card Menu 4 */}
                  <div className='card cardStyle '>
                    <div class='card-img-top NYPastaMenuPGImg '></div>
                    <div className='card-body container'>
                      <div className='row'>
                        <h5 className='card-title card-titleContol col-auto'>
                          Pasta
                        </h5>

                        <Link to='/' className='col-auto  infoMenuPastaBTN'>
                          More Info
                        </Link>
                      </div>
                      <div className='row'>
                        {/* Size  */}
                        <Dropdown className='dropDownControls '>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                              Small
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Large
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Quantity */}
                        <Dropdown className='dropDownControls'>
                          <Dropdown.Toggle
                            className='dropDownControls2'
                            variant=''
                            id='dropdown-basic'
                          >
                            Quantity
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <p className='card-text card-textControl '>
                        560 cal/serving, 2 servings
                      </p>

                      <div className='row addBTNControl'>
                        <div className='col-auto addPizzaBTN'>
                          <Link to='/' className='main-add-button'>
                            <span>Add</span>
                          </Link>
                        </div>
                        <div className='col-auto '>
                          <Link to='/' className='addCustomizePizzaBTN'>
                            Customize
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Menu */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
