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
              <h4 className='lowerFooterLinks movelinksLeft'>Menu</h4>
              <p className='lowerFooterLinks movelinksLeft'>Pizza</p>
              <p className='movelinksLeft'>Pasta</p>
              <p className='movelinksLeft'>Salad</p>
              <p className='movelinksLeft'>Dominican</p>
              <p className='movelinksLeft'>Desert</p>
              <p className='movelinksLeft'>Sides</p>
            </div>
            {/* Col 2 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks movelinksLeft'>About Our Food</h4>
              <p className='lowerFooterLinks movelinksLeft'>Quality</p>
              <p className='movelinksLeft'>Nutrition</p>
            </div>
            {/* Col 3 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks movelinksLeft'>About Us</h4>
              <p className='lowerFooterLinks movelinksLeft'>Our Story</p>
              <p className='movelinksLeft'>Careers</p>
              <p className='movelinksLeft'>Community</p>
              <p className='movelinksLeft'>Catering</p>
              <p className='movelinksLeft'>Customer Service</p>
            </div>
            {/* Col 4 */}
            <div className='col-md-3'>
              <h4 className='lowerFooterLinks movelinksLeft'>My Account</h4>
              <p className='lowerFooterLinks movelinksLeft'>Create Account</p>
              <p className='movelinksLeft'>Sign In</p>
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
