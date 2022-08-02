import React from 'react';
import DMheader from '../components/DMheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import Prefooter from '../components/Prefooter';
import Solutions from '../components/Solutions';
import Strategy from '../components/Strategy';
import Strategyheader from '../components/Strategyheader';
import Yellowblock from '../components/Yellowblock';

const Home = () => {
    return (
        <>
        <Loading/>
        <div className='row'>
            <Nav/>
            <Header/>
        </div>
        <div>
            <Solutions/>
        </div>
        <div className="row2">
            <DMheader/>
        </div>
        <div>
            <Yellowblock/>
        </div>
        <div className="row2">
            <Strategyheader/>
        </div>
        <div className="row">
            <Strategy/>
            <Prefooter/>
        </div>
        <Footer/>
        </>

    );
}

export default Home;
