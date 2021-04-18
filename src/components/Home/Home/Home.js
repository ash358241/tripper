import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServicesCard from '../ServicesCard/ServicesCard';
import TopPlaces from '../TopPlaces/TopPlaces';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopPlaces></TopPlaces>
            <ServicesCard></ServicesCard>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;