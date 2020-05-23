import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';

export default function FooterSec() {
  return (
    <div>
      <footer>
        <div className='container-fluid footerBorder'>
          <div className='row footerItemPadding'>
            {/* Col 1 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks'>Menu</h4>
              <p className='lowerFooterLinks'>Pizza</p>
              <p className=''>Pasta</p>
              <p className=''>Salad</p>
              <p className=''>Dominican</p>
              <p className=''>Desert</p>
              <p className=''>Sides</p>
            </div>
            {/* Col 2 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks'>About Our Food</h4>
              <p className='lowerFooterLinks'>Quality</p>
              <p className=''>Nutrition</p>
            </div>
            {/* Col 3 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks'>About Us</h4>
              <p className='lowerFooterLinks'>Our Story</p>
              <p className=''>Careers</p>
              <p className=''>Community</p>
              <p className=''>Catering</p>
              <p className=''>Customer Service</p>
            </div>
            {/* Col 4 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks'>My Account</h4>
              <p className='lowerFooterLinks'>Create Account</p>
              <p className=''>Sign In</p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row socialMediaLinks'>
            <p className='mediaLinks'>Facebook</p>
            <p className='mediaLinks'>Instagram</p>
            <p className='mediaLinks'>Youtube</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
