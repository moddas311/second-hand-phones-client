import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const BookingModal = ({ availablePhones, setAvailablePhones }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { name: phoneName, sellPrice } = availablePhones;

    // booking 
    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const sellPrice = form.sellPrice.value;
        const number = form.number.value;
        const location = form.location.value;

        const booking = {
            model: phoneName,
            name,
            email,
            sellPrice,
            number,
            location,

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your booking is confirmed!');
                    setAvailablePhones(null);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{phoneName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-6'>
                        <input name='name' type="text" defaultValue={displayName} className="input input-bordered input-info w-full" disabled />
                        <input name='email' type="email" defaultValue={email} className="input input-bordered input-info w-full" disabled />
                        <input name='sellPrice' type="number" defaultValue={sellPrice} className="input input-bordered input-info w-full" disabled />
                        <input name='number' type="number" placeholder="Please type your phone number" className="input input-bordered input-info w-full" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered input-info w-full" required />
                        <input className='btn btn-success w-full font-bold text-white mt-2' type="submit" value="submit" required />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;