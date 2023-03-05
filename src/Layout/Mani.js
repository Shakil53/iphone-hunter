import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const Mani = () => {
    return (
        <div className='mt-2 '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mani;