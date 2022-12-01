import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FindTours from './FindTours/FindTours';
import Meeting from './Meeting/Meeting';
import Interval from './Interval/Interval';
import  FormSec from './FormSec/FormSec.jsx';
import Facilities from './Facilities/Facilities';
import Feeds from './Feeds/Feeds.js'

const About = () => {
    return (
        <div>
             <Header />
            <LandingPage/>
            <FindTours/>
            <Meeting/>
            <Interval/>
            <FormSec/>
            <Facilities/>
            <Feeds/>
            <Footer/>
           
        </div>
    );
}

export default About;
