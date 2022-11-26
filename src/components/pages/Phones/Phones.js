import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData();

    return (
        <div>
            <div>
                <h2 className='text-center text-cyan-600 font-bold text-3xl'>Select Your Phone</h2>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    phones.map(phone => <Phone
                        key={phone._id}
                        phone={phone}
                    />)
                }
            </div>
        </div>
    );
};

export default Phones;