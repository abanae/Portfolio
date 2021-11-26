import React from 'react';
import '../../App.css';
import MainPage from '../MainPage';
import ProjectList from '../ProjectList';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
    return(
        <>
        <MainPage/>
        <HeroSection/>
        {/* <ProjectList/> */}
        <Footer/>
        </>
    )
}

export default Home;
