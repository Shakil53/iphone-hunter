import React from 'react';
import { useLoaderData } from 'react-router';
import Iphone from '../Iphone/Iphone';
import Order from '../Order/Order';
import './Home.css';

const Home = () => {
    const iphones = useLoaderData();

    return (
        <div className='container mt-5 shadow '>
            <div className='iphone-container container'>
                {
                    iphones.map(iphone => <Iphone iphone={iphone}></Iphone>)
                }
            </div>
            <div>
                <Order></Order>
            </div>
        </div>
    );
};

export default Home;