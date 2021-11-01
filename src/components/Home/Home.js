import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import FormCard from '../FormCard/FormCard';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            {/* <Header></Header> */}
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <FormCard></FormCard>

            <Blog></Blog>
            <Footer></Footer>

        </div>
    );
};

export default Home;