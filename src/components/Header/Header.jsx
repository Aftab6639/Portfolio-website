import React from 'react';
import './Header.css';
import CTA from './CTA'
import ME from '../../assets/me-image-png.jpg'
import HeaderSocial from './HeaderSocial';
// import Prof from '../../assets/prof.jpeg.jpeg';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aftab Hussain</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <HeaderSocial/>
        <CTA/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
