import React from 'react';
import img from "../assetss/prefooter.webp";

const Prefooter = () => {
    return (
        <div className='prefooter__wrapper'>
            <div className="prefooter__block">
                <div className="prefooter__block--title">
                    <h1>Wondering how our marketing services can grow your business?</h1>
                </div>
                <div className='header__block--button-wrapper'>
                    <span className="header__block--button">Book a Consultation</span>
                </div>
            </div>
            <figure className="prefooter__block">
                <img src={img}/>
            </figure>
        </div>
    );
}

export default Prefooter;
