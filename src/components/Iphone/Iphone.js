import React from 'react';

const Iphone = ({ iphone }) => {
    console.log(iphone);
    return (
        <div className='mt-3'>
            <img alt="iphone" src={iphone.image}></img>
            <h5>Name {iphone.name}</h5>
            <p><small>Price: ${iphone.price}</small></p>
        </div>
    );
};

export default Iphone;