import React from 'react';
import PropTypes from 'prop-types';


const Footer = ({company}) => {
  return (
    <footer className='footer'>
        <img src={company} alt='HOUSTEP' />
      
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string
}


export default Footer;
