import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.jpg' alt='bg-footer'/>
  </div>
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2 className='font-weight-bold '>About Us</h2>
          </div>
          <div className='content'>
             <p>Donec mollis quisque convallis libero in sapien pharetra tincidunt. 
             Aliquam elit ante, Maecenas suscipit.</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:support@artha.com", "_self")}>Email at. support@artha.com</div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Usefull link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Terms & Conditions</div>
             <div className='link'>Help Center</div>
             <div className='link'>Contact Us</div>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Features
          </div>
          <div className='content'>
            <div className='link'>Career</div>
            <div className='link'>Brand Identity</div>
            <div className='link'>Investment</div>
            <div className='link'>Agency Patner</div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>Malesuada id, tempor eu, gravida id, odio.
               Maecenas suscipit.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2020 <span className='font-weight-bold'>Artha</span> All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
