import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {



    return (
        <footer>
            <div className="footer__block row">
                <div className="footer__block--para">
                    <h1>
                        Be always in touch so that we can help you first.
                    </h1>
                </div>
                <ul className="footer__block--menu">
                    <li className='footer__block--menu-item'>
                        <a href="#" className='color-red'>Home</a>
                    </li>
                    <li className='footer__block--menu-item'>
                        <a href="#">About</a>
                    </li>
                    <li className='footer__block--menu-item'>
                        <a href="#">Services</a>
                    </li>
                    <li className='footer__block--menu-item'>
                        <a href="#">News</a>
                    </li>
                    <li className='footer__block--menu-item'>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
                <div className="footer__block--contact">
                    <div className="phone-email">
                        <p>+(800) 127 124 42</p>
                        <p>Example@example.com</p>
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon="fa-brands fa-behance" className='icon'/>
                        <FontAwesomeIcon icon="fa-brands fa-dribbble" className='icon' />
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className='icon' />
                    </div>
                </div>
            </div>
            <div className="copyright row">
                <p>© 2022 InTouch.</p>
            </div>
        </footer>
    );
}

export default Footer;
