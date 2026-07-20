import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeM from "../components/HomeM";
function Home(props) {
    return (
        <div>
            <Header/>
            <HomeM/>
            <Footer/>
        </div>
    );
}

export default Home;