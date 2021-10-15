import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Foods />
            <About />
            <Footer />
        </div>
    );
};

export default Home;