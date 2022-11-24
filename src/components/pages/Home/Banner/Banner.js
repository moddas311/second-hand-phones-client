import React from 'react';
import banner from '../../../../assets/banner/banner.jpg';;

const Banner = () => {
    return (
        <div className="card w-full shadow-xl image-full py-10 px-5 ">
            <figure><img className='bg-gradient-to-r from-black to-transparent' src={banner} alt="banner" /></figure>
            <div className="card-body mt-16">
                <h2 className="card-title text-5xl text-orange-300 font-bold">Phone's Bazar</h2>
                <p>The Best Second Handed Phone Sellers Website..!!
                    <br />
                    We are providing second handed phones in city or any local area.
                    <br />
                    Dhaka or anywhere we will send our phone within 24 hours.
                    <br />
                    Our seller are trusted so if you're looking for second hand phone !!
                    <br />
                    We are Providing <span className='text-sky-600 font-bold'>SamSung, iPhone & onePlus</span>
                    <br />
                   <span className='text-blue-400 text-xl font-bold'>You Should Buy From us!!</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;

