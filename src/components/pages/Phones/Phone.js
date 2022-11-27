import React from 'react';

const Phone = ({ phone, setAvailablePhones }) => {



    const { img, name, location, sellPrice, sellerName, originalPrice, used, postedDate } = phone;


    return (
        <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <div className='bg-yellow-100 rounded-lg text-blue-500 text-left p-4'>
                        <h2 className="text-2xl">Model:  {name}</h2>
                        <h3 className='font-bold text-xl'>Seller: {sellerName}</h3>
                    </div>
                    <p className="dark:text-gray-100">Location: {location}</p>
                    <p className="dark:text-gray-100">Market Price: {originalPrice}৳</p>
                    <p className="dark:text-gray-100">Resell Price: {sellPrice}৳</p>
                    <p className="dark:text-gray-100">Used: {used}</p>
                    <p className="dark:text-gray-100">Post Date: {postedDate}</p>
                </div>
                <label
                    onClick={() => setAvailablePhones(phone)}
                    htmlFor="booking-modal"
                    className="btn btn-success flex items-center mx-auto justify-center rounded-md"
                >Book Now</label>
            </div>
        </div>
    );
};

export default Phone;