import React, { Component } from 'react';
import './pizzamenu.css';
import PizzaInfo from '../Pizza-Info';

import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import { Input, FormBtn } from '../Form';

// export default function Pizzamenu() {
class Pizzamenu extends Component {
state = {
pizzaData: {},
quantity: '',
size: '',
classification: 'Pizza'
};

componentDidMount() {
this.loadPizza();
API.getPizza()
.then(res =>
this.setState({
pizzaData: res.data
})
)
.catch(err => console.log(err));
}

loadPizza = () => {
API.getPizza()
.then(res =>
this.setState({
pizzaData: res.data,
quantity: '',
size: ''
})
)
.catch(err => console.log(err));
};

deletePizza = Pizza => {
API.deletePizza(Pizza)
.then(res => this.loadPizza())
.catch(err => console.log(err));
};
handleInputChange = event => {
const { name, value } = event.target;
this.setState({
[name]: value
});
};

handleFormSubmit = event => {
event.preventDefault();
if (this.state.quantity && this.state.size && this.state.classification) {
console.log('Attempting to add a new pizza');
API.updatePizza({
quantity: this.state.quantity,
size: this.state.size,
today: Date.now
})
.then(res => {
console.log(res);
this.setState({
pizzaData: {
quantity: this.state.quantity,
size: this.state.size,
classification: this.state.classification
}
});
if (res.status === 200) {
console.log('Order submitted succesfully');

return alert(
'Your selection has been submitted. To update, simply re-submit. Thank you'
);
}
})
.catch(err => console.log(err));
}
};

render() {
return (
<div>
{/* First set -4- of cards */}
<div className='container-fluid centerPage '>
<section className='section-Menu'>
<h1 className='menuMainText'>BigAz's picks</h1>
<div className='row'>
<div className='col-lg-3'>
{/* Card Menu 1 */}
<div className='card cardStyle '>
<div className='card-img-top PizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
More Info
</Link>
</div>
<div className='row'>
<form>
{/* Size  */}

<select
className='selectOptions'
value={this.state.size}
onChange={this.handleInputChange}
name='size'
>
<option selected>Size</option>
<option name='size'>Small</option>
<option name='size'>Medium</option>
<option name='size'>Large</option>
</select>


{/* Quantity */}


<select
className='selectOptions'
value={this.state.quantity}
onChange={this.handleInputChange}
name='quantity'
>
<option selected>Quantity</option>
<option name='quantity'>1</option>
<option name='quantity'>2</option>
<option name='quantity'>3</option>
</select>

</form>
</div>

<p className='card-text card-textControl '>
270 cal/slice, 8 slices
</p>

<div className='row addBTNControl'>
<div className='col-auto addPizzaBTN'>
<Link
className='main-add-button  '
onClick={this.handleFormSubmit}
>
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
<div>
<p>
You selection:
<PizzaInfo
quantity={this.state.pizzaData.quantity}
size={this.state.pizzaData.size}
classification={this.state.pizzaData.classification}
/>{' '}
</p>
</div>
{/* End of Card Menu */}
</div>

<div className='col-lg-3'>
{/* Card Menu 2*/}
<div className='card cardStyle '>
<div className='card-img-top PizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top PizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top PizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top HSPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top HSPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top HSPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top HSPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top NYPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top NYPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top NYPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
<div className='card-img-top NYPizzaMenuPGImg '></div>
<div className='card-body container'>
<div className='row'>
<h5 className='card-title card-titleContol col-auto'>
Cheese Pizza
</h5>

<Link to='/' className='col-auto  infoMenuPizzaBTN'>
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
<Dropdown.Item href='#/action-1'>Small</Dropdown.Item>
<Dropdown.Item href='#/action-2'>
  Medium
</Dropdown.Item>
<Dropdown.Item href='#/action-3'>Large</Dropdown.Item>
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
270 cal/slice, 8 slices
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
);
}
}
export default Pizzamenu;
