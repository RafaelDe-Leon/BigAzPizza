import React from 'react';
import './contactus.css';

export default function ContactUS() {
  return (
    <div>
      <div className='container-fluid '>
        {/* Image Row */}
        <div className='containerControl'>
          <div className='contactUsIMG'>
            {/* <a
              target='_blank'
              href='https://www.google.com/maps/place/80+W+Fordham+Rd,+The+Bronx,+NY+10468/@40.8625957,-73.9043808,16z/data=!4m5!3m4!1s0x89c2f389d9f65b47:0xa9fdb069e22a0520!8m2!3d40.8626469!4d-73.9044242'
            ></a> */}
          </div>
          {/* Write to us Text */}
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4 contactMidTextCon'>
              <div className='contactMidText'>Write Us A Letter</div>
              <div className='contactMidText'>
                Use the field below to drop us an e-mail.
              </div>
            </div>
            <div className='col-lg-4'></div>
          </div>
          {/* Location & Hours */}
          <div className='row locationHR'>
            <div className='col-lg-6'>
              <div className='row'>New York </div>
              <div className='row'>
                Big' Az Pizza Cafe is located in the Bronx
              </div>
              <div className='row'>80 W Fordham Rd, New York, NY 10468 </div>
              <div className='row'>Working Hours </div>
              <div className='row'>Sunday - Thursday 12:00 PM - 7:30PM </div>
              <div className='row'>Friday - Saturday 12:00 PM - 7:30 PM </div>
              <div className='row'>(917) 891 - 8088 </div>
            </div>
            <div className='col-lg-6'>
              <form>
                <div className='form-group'>
                  <label for='nameContactUsInput'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='nameContactUsInput'
                    placeholder='Full Name'
                  ></input>
                </div>

                <div className='form-group'>
                  <label for='emailContactUs'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='emailContactUsInput'
                    placeholder='name@example.com'
                  ></input>
                </div>

                <div className='form-group'>
                  <label for='messageContactUsInput'>Message</label>
                  <input
                    type='text'
                    className='form-control'
                    id='messageContactUsInput'
                    placeholder='Message'
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
