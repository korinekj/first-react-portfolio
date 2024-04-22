import React from 'react';
import './footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href='/#' className='footer__logo'>
        LOGO
      </a>

      <ul className='permalinks'>
        <li>
          <a href='/#'>Úvod</a>
        </li>
        <li>
          <a href='#about'>O mně</a>
        </li>
        <li>
          <a href='#experience'>Zkušenosti</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href='#portfolio'>Projekty</a>
        </li>
        <li>
          <a href='#testimonials'>Reference</a>
        </li>
        <li>
          <a href='#contact'>Kontakt</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <FaFacebookF />
        </a>

        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; Copyright {currentYear}, Jaroslav Kořínek. Všechna práva
          vyhrazena.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
