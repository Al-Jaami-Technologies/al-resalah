import React from 'react';
import AboutBanner from '../components/AboutUsPage/AboutBanner';
import Journyy from '../components/AboutUsPage/Journyy';
import Cards from '../components/AboutUsPage/Cards';
import Respected from '../components/AboutUsPage/Respected';
import Story from '../components/AboutUsPage/Story';



const AboutUsPage = () => {
    

    return (
        <div>
            <AboutBanner></AboutBanner>
            <Journyy></Journyy>
            <Cards></Cards>
            <Respected></Respected>
            <Story></Story>
            

            
        </div>
    );
};

export default AboutUsPage;