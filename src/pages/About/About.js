import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FindTours from './FindTours/FindTours';
import Meeting from './Meeting/Meeting';
import Interval from './Interval/Interval';
import  FormSec from './FormSec/FormSec.jsx';

const About = () => {
    return (
        <div>
             <Header />
            <LandingPage/>
            <FindTours/>
            <Meeting/>
            <Interval/>
            <FormSec/>
            <Footer/>
        </div>
    );
}

export default About;
