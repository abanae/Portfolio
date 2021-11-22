import React from 'react';
import '../../App.css';
import MainPage from '../MainPage';
import ProjectList from '../ProjectList';
import Footer from '../Footer';

function Home() {
    return(
        <>
        <MainPage/>
        <ProjectList/>
        <Footer/>
        </>
    )
}

export default Home;
