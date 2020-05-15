import React from 'react';
import './contactus.css';

export default function ContactUS() {
  return (
    <div>
      <div className='container-fluid '>
        {/* Image Row */}
        <div className='containerControl'>
          <a
            target='_blank'
            href='https://www.google.com/maps/place/80+W+Fordham+Rd,+The+Bronx,+NY+10468/@40.8625957,-73.9043808,16z/data=!4m5!3m4!1s0x89c2f389d9f65b47:0xa9fdb069e22a0520!8m2!3d40.8626469!4d-73.9044242'
          >
            <div className='contactUsIMG'></div>
          </a>

          {/* Write to us Text */}
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4 contactMidTextContainer'>
              <div className='contactMidText1'>Write Us A Letter</div>
              <div className='contactMidText2'>
                Use the field below to drop us an e-mail.
              </div>
            </div>
            <div className='col-lg-4'></div>
          </div>
          {/* Location & Hours */}
          <div className='row locationHR'>
            <div className='col-lg-6'>
              <div className=' NY'>New York </div>
              <div className=' addHours'>
                Big' Az Pizza Cafe is located in the Bronx
              </div>
              <div className='addHours'>
                80 W Fordham Rd, New York, NY 10468{' '}
              </div>
              <div className='addHours workingHRS'>Working Hours </div>
              <div className=' addHours'>
                Sunday - Thursday 10:00 PM - 10:00PM{' '}
              </div>
              <div className='addHours'>
                Friday - Saturday 10:00 PM - 10:00 PM{' '}
              </div>
              <div className='addHours'>(917) 891 - 8088 </div>
            </div>
            <div className='col-lg-6'>
              <form>
                <div className='form-group'>
                  <label for=''>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id=''
                    placeholder='Full Name'
                  ></input>
                </div>

                <div className='form-group'>
                  <label for=''>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id=''
                    placeholder='name@example.com'
                  ></input>
                </div>

                <div className='form-group '>
                  <label for=''>Message</label>
                  <textarea class='form-control' id='' rows='3'></textarea>
                  <button className='main-button sendBTN'>
                    <span>Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
