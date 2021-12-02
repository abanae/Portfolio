import React from 'react';
import '../../App.css';
import MainPage from '../MainPage';
import ProjectList from '../ProjectList';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Tools from '../Tools';

function Home() {
    return(
        <>
        <MainPage/>
        <HeroSection/>
        <ProjectList/>
        <Tools/>
        <Footer/>
        </>
    )
}

export default Home;
