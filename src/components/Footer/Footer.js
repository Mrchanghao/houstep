import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({company}) => {
  return (
    <footer className='footer'>
        <div className='footer__wrapper'>
          <img className='footer__wrapper-image' src={company} alt='HOUSTEP' />
        </div>
      
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string
}


export default Footer;
