import React from 'react';
import Banner from '../Banner/Banner';
import Categories from './Categories/Categories';
import HomeReview from './HomeReview/HomeReview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <HomeReview />
        </div>
    );
};

export default Home;