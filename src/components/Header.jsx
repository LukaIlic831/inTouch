import React from 'react';
import img from "../assetss/header-img.webp"

const Header = () => {
    return (
        <div className='header__wrapper'>
            <div className="header__block">
                <div className="header__block--title">
                    <h1>Digital marketing that delivers results</h1>
                </div>
                <div className="header__block--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ducimus distinctio est accusantium voluptas, possimus ratione voluptate corrupti, iste tenetur facilis, iure dicta vitae repellendus ipsam eveniet sit perspiciatis repellat?
                </div>
                <div className='header__block--button-wrapper'>
                    <span className="header__block--button">Book a Consultation</span>
                </div>
            </div>
            <figure className="header__block">
                <img src={img} />
            </figure>
        </div>
    );
}

export default Header;
