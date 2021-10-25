import React from 'react';
import AboutUs from '../AboutUs/AboutUs';

import HomeBanner from '../HomeBanner/HomeBanner';
import OurDepartment from '../OurDepartment/OurDepartment';
import OurFeatures from '../OurFeatures/OurFeatures';
import PatientReviews from '../PatientReviews/PatientReviews';

const Home = () => {
    return (
        <div> 
            <HomeBanner></HomeBanner>
            <OurFeatures></OurFeatures>
            <AboutUs></AboutUs>
            <OurDepartment></OurDepartment>
            <PatientReviews></PatientReviews>           
        </div>
    );
};

export default Home;