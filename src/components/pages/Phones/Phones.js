import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData();
    const [availablePhones, setAvailablePhones] = useState(null);
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
                        setAvailablePhones={setAvailablePhones}
                    />)
                }
            </div>
            {
                availablePhones &&
                <BookingModal
                    setAvailablePhones={setAvailablePhones}
                    availablePhones={availablePhones}
                />
            }
        </div>
    );
};

export default Phones;