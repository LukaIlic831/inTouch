import React from 'react';
import img from "../assetss/blogimg.webp";
import img2 from "../assetss/blogimg2.webp";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Yellowblock = () => {

    useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return (
        <div className='yellow-block__wrapper' data-aos="fade-right" data-aos-offset="500">
            <div className="yellow-block row2">
                <div>
                    <div className="blogs__wrapper">
                        <div className="blog__block">
                            <figure className='blog__block--img'>
                                <img src={img} />
                            </figure>
                            <div className="blog__block--title">
                                <h2>For business owners</h2>
                            </div>
                            <div className="blog__block--para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem, voluptatum excepturi maiores</p>
                            </div>
                            <div className="blog__block--learn">
                                <p>Learn More</p>
                            </div>
                        </div>
                        <div className="blog__block">
                            <figure className='blog__block--img'>
                                <img src={img2} />
                            </figure>
                            <div className="blog__block--title">
                                <h2>For business owners</h2>
                            </div>
                            <div className="blog__block--para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem, voluptatum excepturi maiores</p>
                            </div>
                            <div className="blog__block--learn">
                                <p>Learn More</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="black-block__wrapper" data-aos="fade-left" data-aos-offset="200">
                    <div className="black-block__title">
                        <h1>We have more awesome stuff to show</h1>
                    </div>
                    <div className='black-block__button--wrapper'>
                        <span className='black-block__button'>Book a Consultation</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Yellowblock;
