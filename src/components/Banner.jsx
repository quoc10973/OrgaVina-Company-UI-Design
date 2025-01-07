import React from 'react';
import banner from '../assets/banner.jpg'; // Ensure this path is correct

const Banner = () => {
    return (
        <div className="w-full h-[600px] overflow-hidden">
            <img src={banner} alt="Banner" className="w-full h-full object-cover" />
        </div>
    );
}

export default Banner;
