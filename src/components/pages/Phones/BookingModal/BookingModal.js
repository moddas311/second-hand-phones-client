import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const BookingModal = ({ availablePhones }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { name, sellPrice } = availablePhones;

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-2 mt-6'>
                        <input type="text" defaultValue={displayName} className="input input-bordered input-info w-full" disabled />
                        <input type="text" defaultValue={email} className="input input-bordered input-info w-full" disabled />
                        <input type="text" defaultValue={sellPrice} className="input input-bordered input-info w-full" disabled />
                        <input type="text" placeholder="Please type your phone number" className="input input-bordered input-info w-full" />
                        <input type="text" placeholder="Meeting Location" className="input input-bordered input-info w-full" />
                        <input className='btn btn-success w-full font-bold text-white mt-2' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;