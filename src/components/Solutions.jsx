import React from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Solutions = () => {

    
    useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return (
        <div className='solutions__wrapper' data-aos="fade-left" data-aos-offset="500">
            <div className="solutions__block">
                <div className="solutions__header">
                    <h1>Meet our solutions for you</h1>
                </div>
                <div className="solutions__mini-block--wrapper">
                    <div className="solutions__mini-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none"><circle cx="33" cy="33" r="32.5" fill="white" stroke="white"></circle><path d="M47 21.8261L46.1 20C44.4687 20.7038 42.8656 21.5408 41.2906 22.5109C39.7344 23.462 38.2344 24.4986 36.7906 25.6209C35.3469 26.7242 33.9687 27.8845 32.6562 29.1019C31.3438 30.3193 30.125 31.5462 29 32.7826L22.7 28.2174L20 30.9565L29 41C30.0312 39.1549 31.1562 37.3288 32.375 35.5217C33.5937 33.7147 34.9344 31.9837 36.3969 30.3288C37.8781 28.6739 39.4906 27.1236 41.2344 25.678C42.9969 24.2323 44.9187 22.9484 47 21.8261Z" fill="#0F0F0F"></path></svg>
                        <div className="solutions__mini-block--para">
                            <p>Facebook Ads</p>
                        </div>
                    </div>
                    <div className="solutions__mini-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none"><circle cx="33" cy="33" r="32.5" fill="white" stroke="white"></circle><path d="M47 21.8261L46.1 20C44.4687 20.7038 42.8656 21.5408 41.2906 22.5109C39.7344 23.462 38.2344 24.4986 36.7906 25.6209C35.3469 26.7242 33.9687 27.8845 32.6562 29.1019C31.3438 30.3193 30.125 31.5462 29 32.7826L22.7 28.2174L20 30.9565L29 41C30.0312 39.1549 31.1562 37.3288 32.375 35.5217C33.5937 33.7147 34.9344 31.9837 36.3969 30.3288C37.8781 28.6739 39.4906 27.1236 41.2344 25.678C42.9969 24.2323 44.9187 22.9484 47 21.8261Z" fill="#0F0F0F"></path></svg>
                        <div className="solutions__mini-block--para">
                            <p>Email
                                Marketing
                            </p>
                        </div>
                    </div>
                    <div className="solutions__mini-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none"><circle cx="33" cy="33" r="32.5" fill="white" stroke="white"></circle><path d="M47 21.8261L46.1 20C44.4687 20.7038 42.8656 21.5408 41.2906 22.5109C39.7344 23.462 38.2344 24.4986 36.7906 25.6209C35.3469 26.7242 33.9687 27.8845 32.6562 29.1019C31.3438 30.3193 30.125 31.5462 29 32.7826L22.7 28.2174L20 30.9565L29 41C30.0312 39.1549 31.1562 37.3288 32.375 35.5217C33.5937 33.7147 34.9344 31.9837 36.3969 30.3288C37.8781 28.6739 39.4906 27.1236 41.2344 25.678C42.9969 24.2323 44.9187 22.9484 47 21.8261Z" fill="#0F0F0F"></path></svg>
                        <div className="solutions__mini-block--para">
                            <p>Marketing
                                Automation
                            </p>
                        </div>
                    </div>
                    <div className="solutions__mini-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none"><circle cx="33" cy="33" r="32.5" fill="white" stroke="white"></circle><path d="M47 21.8261L46.1 20C44.4687 20.7038 42.8656 21.5408 41.2906 22.5109C39.7344 23.462 38.2344 24.4986 36.7906 25.6209C35.3469 26.7242 33.9687 27.8845 32.6562 29.1019C31.3438 30.3193 30.125 31.5462 29 32.7826L22.7 28.2174L20 30.9565L29 41C30.0312 39.1549 31.1562 37.3288 32.375 35.5217C33.5937 33.7147 34.9344 31.9837 36.3969 30.3288C37.8781 28.6739 39.4906 27.1236 41.2344 25.678C42.9969 24.2323 44.9187 22.9484 47 21.8261Z" fill="#0F0F0F"></path></svg>
                        <div className="solutions__mini-block--para">
                            <p>Lead
                                Generation</p>
                        </div>
                    </div>
                    <div className="solutions__mini-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none"><circle cx="33" cy="33" r="32.5" fill="white" stroke="white"></circle><path d="M47 21.8261L46.1 20C44.4687 20.7038 42.8656 21.5408 41.2906 22.5109C39.7344 23.462 38.2344 24.4986 36.7906 25.6209C35.3469 26.7242 33.9687 27.8845 32.6562 29.1019C31.3438 30.3193 30.125 31.5462 29 32.7826L22.7 28.2174L20 30.9565L29 41C30.0312 39.1549 31.1562 37.3288 32.375 35.5217C33.5937 33.7147 34.9344 31.9837 36.3969 30.3288C37.8781 28.6739 39.4906 27.1236 41.2344 25.678C42.9969 24.2323 44.9187 22.9484 47 21.8261Z" fill="#0F0F0F"></path></svg>
                        <div className="solutions__mini-block--para">
                            <p>Landing Page
                                Optimization</p>
                        </div>
                    </div>
                    <div className="solutions__mini-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none"><circle cx="33" cy="33" r="32.5" fill="white" stroke="white"></circle><path d="M47 21.8261L46.1 20C44.4687 20.7038 42.8656 21.5408 41.2906 22.5109C39.7344 23.462 38.2344 24.4986 36.7906 25.6209C35.3469 26.7242 33.9687 27.8845 32.6562 29.1019C31.3438 30.3193 30.125 31.5462 29 32.7826L22.7 28.2174L20 30.9565L29 41C30.0312 39.1549 31.1562 37.3288 32.375 35.5217C33.5937 33.7147 34.9344 31.9837 36.3969 30.3288C37.8781 28.6739 39.4906 27.1236 41.2344 25.678C42.9969 24.2323 44.9187 22.9484 47 21.8261Z" fill="#0F0F0F"></path></svg>
                        <div className="solutions__mini-block--para">
                            <p>Conversion
                                Optimization
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions;
