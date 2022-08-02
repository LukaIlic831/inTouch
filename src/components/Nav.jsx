import React from 'react';
import img from '../assetss/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {

    function openMenu() {
        document.querySelector(".phone__menu").style.left = '0';
    }

    function closeMenu() {
        document.querySelector(".phone__menu").style.left = '100%';
    }

    return (
        <nav>
            <figure className='logo__wrapper'>
                <img src={img} />
            </figure>
            <ul className="nav__list">
                <li>
                    <a href="#" className="nav__list--item border-bottom-active">Home</a>
                </li>
                <li>
                    <a href="#" className="nav__list--item border-bottom">About</a>
                </li>
                <li>
                    <a href="#" className="nav__list--item border-bottom">Services</a>
                </li>
                <li>
                    <a href="#" className="nav__list--item border-bottom">News</a>
                </li>
                <li>
                    <a href="#" className="nav__list--item border-bottom">Contacts</a>
                </li>
                <li className="nav__list--item list-button">
                    Book a Consultation
                </li>
            </ul>
            <FontAwesomeIcon icon="fa-solid fa-bars" className='menu-icn' onClick={openMenu}/>
            <div className="phone__menu">
                <div className="x-mark-wrapper">
                <FontAwesomeIcon icon="fa-solid fa-xmark" className='x-mark' onClick={closeMenu}/>
                </div>
                <ul>
                    <li >
                        <a href="#" className='border-bottom-active'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='border-bottom'>About</a>
                    </li>
                    <li>
                        <a href="#" className='border-bottom'>Services</a>
                    </li>
                    <li>
                        <a href="#" className='border-bottom'>News</a>
                    </li>
                    <li>
                        <a href="#" className='border-bottom'>Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
