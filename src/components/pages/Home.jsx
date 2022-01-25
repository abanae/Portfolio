import React from 'react';
import '../../App.css';
import MainPage from '../MainPage';
import ProjectList from '../ProjectList';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Tools from '../Tools';
import About from '../About';
import ContactMe from '../ContactMe';


function Home() {
    return(
        <>
        <MainPage/>
        <HeroSection/>
        <ProjectList/>
        <Tools/>
        <About/>
        <ContactMe/>
        <Footer/>
        </>
    )
}

export default Home;
