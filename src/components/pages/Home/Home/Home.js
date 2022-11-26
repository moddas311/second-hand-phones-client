import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Categories from './Categories/Categories';
import HomeReview from './HomeReview/HomeReview';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <Banner />
            <Categories />
            <HomeReview />
        </div>
    );
};

export default Home;