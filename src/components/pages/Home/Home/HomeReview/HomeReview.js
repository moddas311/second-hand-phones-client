import React from 'react';
import background from '../../../../../assets/banner/background.jpg';

const HomeReview = () => {
    return (
        <div className='text-center my-10 px-5
            bg-gradient-to-r from-black to-transparent'
            style={{
                background: `url(${background})`
            }}
        >
            <div className='py-5'>
                <h4 className='text-xl font-bold text-primary'>Connect Us</h4>
                <h3 className='text-2xl text-yellow-500 font-bold'>For Any Information</h3>
            </div>
            <form>
                <div>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
                <div className='my-4'>
                    <input type="text" placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
                <div>
                    <textarea className="textarea w-full input-bordered input-secondary max-w-xs" placeholder="Your Opinion"></textarea>
                </div>
                <div className='py-2'>
                    <button className='btn btn-active btn-secondary text-white font-bold rounded-lg'>Feed Back</button>
                </div>
            </form>
        </div>
    );
};

export default HomeReview;